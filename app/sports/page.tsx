// pages/sports/index.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  Trophy,
  Users,
  Calendar,
  Clock,
  Target,
  Award,
  CheckCircle,
  AlertCircle,
  Timer,
  MapPin,
  Medal,
  Zap,
} from "lucide-react";
interface SportsEvent {
  id: string;
  name: string;
  description: string;
  duration: string;
  fee: number;
  rules: string[];
  equipment: string;
  venue: string;
  teamSize?: string; // Optional property
  format?: string; // Optional property
  events?: string[]; // Optional property for sub-events
}

interface SportsCategory {
  id: string;
  name: string;
  description: string;
  events: SportsEvent[];
}
// This data would come from your backend in the future
const sportsCategories: SportsCategory[] = [
  {
    id: "team-sports",
    name: "Team Sports",
    description: "Collaborative sports requiring teamwork and strategy",
    events: [
      {
        id: "cricket",
        name: "Cricket (T-20)",
        description:
          "19-over cricket tournament with modified rules for school competition",
        teamSize: "11 players + 4 substitutes",
        duration: "2 days",
        fee: 295,
        rules: [
          "20 overs per innings",
          "Maximum 4 overs per bowler",
          "Powerplay: First 6 overs",
          "No-ball and wide ball penalties apply",
          "DRS not available",
        ],
        equipment: "Cricket kit, helmet, pads, gloves provided by school",
        venue: ""
      },
      {
        id: "football",
        name: "Football",
        description: "Standard 11-a-side football tournament",
        teamSize: "11 players + 4 substitutes",
        duration: "2 days",
        fee: 295,
        rules: [
          "Two halves of 20 minutes each",
          "Standard FIFA rules apply",
          "Maximum 3 substitutions per team",
          "Yellow and red card system",
          "Penalty shootout for knockout ties",
        ],
        equipment: "Football boots, shin guards, team jersey",
        venue: "Football Field A & B",
      },
      {
        id: "kabaddi",
        name: "Kabaddi",
        description: "Traditional Indian team sport similar to Kabaddi",
        teamSize: "7 players + 2 substitutes",
        duration: "1 day",
        fee: 293,
        rules: [
          "Two halves of 10 minutes each",
          "Traditional kabaddi rules",
          "No equipment required",
          "Points for successful raids and tackles",
          "Team with highest points wins",
        ],
        equipment: "Sports attire, no special equipment needed",
        venue: "Indoor Sports Hall",
      },
      {
        id: "kho-kho",
        name: "Kho-kho",
        description: "Traditional chasing game requiring speed and agility",
        teamSize: "9 players + 3 substitutes",
        duration: "1 day",
        fee: 293,
        rules: [
          "Two innings of 10 minutes each",
          "Traditional Kho-Kho rules",
          "Chasing and defending turns",
          "Points for successful touches",
          "Time-based scoring system",
        ],
        equipment: "Sports attire, no special equipment needed",
        venue: "Kho-Kho Court",
      },
      {
        id: "relay",
        name: "400m Relay Race",
        description: "Team relay race with 4 runners per team",
        teamSize: "4 runners + 2 substitutes",
        duration: "Half day",
        fee: 294,
        rules: [
          "4 x 100m relay format",
          "Baton passing in designated zones",
          "Lane discipline must be maintained",
          "False start rules apply",
          "Fastest team wins",
        ],
        equipment: "Running spikes, team uniform",
        venue: "Athletics Track",
      },
    ],
  },
  {
    id: "individual-sports",
    name: "Individual Sports",
    description: "Solo competitions testing individual skill and performance",
    events: [
      {
        id: "track-events",
        name: "Track Events",
        description:
          "Individual running competitions across multiple distances",
        events: ["100m Sprint", "200m Sprint", "400m Sprint", "1.6km Distance"],
        duration: "1 day",
        fee: 299,
        rules: [
          "Standard IAAF track rules",
          "Electronic timing system",
          "Lane discipline required",
          "False start disqualification",
          "Heats and finals format",
        ],
        equipment: "Running spikes, athletic wear",
        venue: "Athletics Track",
      },
      {
        id: "field-events",
        name: "Field Events",
        description: "Throwing and jumping competitions",
        events: ["High Jump", "Discus Throw", "Shot Put","Long Jump"],
        duration: "1 day",
        fee: 299,
        rules: [
          "Standard IAAF field rules",
          "Three attempts per participant",
          "Best performance counts",
          "Safety protocols mandatory",
          "Equipment provided by organizers",
        ],
        equipment: "Athletic wear, equipment provided",
        venue: "Athletics Field",
      },
      {
        id: "chess",
        name: "Chess",
        description: "Strategic board game tournament",
        format: "Swiss system tournament",
        duration: "1 day",
        fee: 299,
        rules: [
          "FIDE rules apply",
          "Time control: 25 minutes + 10 seconds increment",
          "Swiss system pairing",
          "7 rounds for final ranking",
          "Electronic boards for top games",
        ],
        equipment: "Chess sets and clocks provided",
        venue: "Chess Hall",
      },
      {
        id: "badminton",
        name: "Badminton",
        description: "Singles badminton tournament",
        format: "Knockout tournament",
        duration: "1 day",
        fee: 299,
        rules: [
          "BWF rules apply",
          "Best of 3 games format",
          "21 points per game",
          "Service rules strictly enforced",
          "Knockout format with seeding",
        ],
        equipment: "Racket and shuttlecocks provided",
        venue: "Badminton Courts (Indoor)",
      },
    ],
  },
];

const ageCategories = [
  {
    category: "U-12",
    description: "Under 12 years",
    eligibility: "Born after 1st January 2013",
    badge: "bg-green-500 text-white",
  },
  {
    category: "U-14",
    description: "Under 14 years",
    eligibility:
      "Born on or after 1st January 2011 and on or before 31st December 2012",
    badge: "bg-[var(--color-gold)] text-black",
  },
  {
    category: "U-16",
    description: "Under 16 years",
    eligibility:
      "Born on or after 1st January 2009 and on or before 31st December 2010",
    badge: "bg-[var(--color-royal-blue)] text-white",
  },
];

export default function SportsEventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-royal-blue)] via-blue-700 to-blue-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 animate-fade-in-up">
            <Badge className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90 text-sm px-4 py-2">
              Sports Tournaments
            </Badge>

            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Sports{" "}
              <span className="text-[var(--color-gold)]">Championships</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Compete in Team Sports • Individual Events • Traditional Games
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
              <div className="space-y-1">
                <div className="text-2xl md:text-3xl font-bold text-[var(--color-gold)]">
                  15
                </div>
                <div className="text-sm md:text-base text-blue-200">
                  Sports Events
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl md:text-3xl font-bold text-[var(--color-gold)]">
                  3
                </div>
                <div className="text-sm md:text-base text-blue-200">
                  Age Categories
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl md:text-3xl font-bold text-[var(--color-gold)]">
                  ₹299-749
                </div>
                <div className="text-sm md:text-base text-blue-200">
                  Registration Fee
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Categories */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-royal-blue)] mb-4">
              Age Categories
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Fair competition across different age groups with appropriate
              modifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {ageCategories.map((age) => (
              <Card
                key={age.category}
                className="card-hover border-0 shadow-lg"
              >
                <CardHeader className="text-center">
                  <Badge
                    className={`${age.badge} text-sm md:text-base px-3 md:px-4 py-1 md:py-2 mx-auto`}
                  >
                    {age.category}
                  </Badge>
                  <CardTitle className="text-lg md:text-xl">
                    {age.description}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {age.eligibility}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Events */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12 md:space-y-16">
            {sportsCategories.map((category) => (
              <div key={category.id} className="space-y-6 md:space-y-8">
                <div className="text-center">
                  <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-royal-blue)] mb-4">
                    {category.name}
                  </h2>
                  <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                  {category.events.map((event) => (
                    <Card
                      key={event.id}
                      className="border-0 shadow-lg"
                      id={event.id}
                    >
                      <CardHeader className="bg-[var(--color-gold)] text-black">
                        <CardTitle className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 md:space-x-3">
                            <Trophy className="h-5 w-5 md:h-6 md:w-6" />
                            <span className="text-base md:text-lg">
                              {event.name}
                            </span>
                          </div>
                          <Badge className="bg-black text-[var(--color-gold)] text-xs md:text-sm">
                            ₹{event.fee}
                          </Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 md:p-6 space-y-4 md:space-y-6">
                        <p className="text-muted-foreground text-sm md:text-base">
                          {event.description}
                        </p>

                        {/* Event Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm">
                          {event.teamSize && (
                            <div className="flex items-center space-x-2">
                              <Users className="h-3 w-3 md:h-4 md:w-4 text-[var(--color-royal-blue)]" />
                              <span>{event.teamSize}</span>
                            </div>
                          )}
                          <div className="flex items-center space-x-2">
                            <Clock className="h-3 w-3 md:h-4 md:w-4 text-[var(--color-royal-blue)]" />
                            <span>{event.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-3 w-3 md:h-4 md:w-4 text-[var(--color-royal-blue)]" />
                            <span>{event.venue}</span>
                          </div>
                          {event.format && (
                            <div className="flex items-center space-x-2">
                              <Target className="h-3 w-3 md:h-4 md:w-4 text-[var(--color-royal-blue)]" />
                              <span>{event.format}</span>
                            </div>
                          )}
                        </div>

                        {/* Sub-events for Track/Field */}
                        {event.events && (
                          <div className="space-y-2">
                            <h4 className="font-semibold text-xs md:text-sm">
                              Events Include:
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {event.events.map((subEvent) => (
                                <Badge
                                  key={subEvent}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {subEvent}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Rules */}
                        <div className="space-y-2 md:space-y-3">
                          <h4 className="font-semibold text-xs md:text-sm flex items-center space-x-2">
                            <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-600" />
                            <span>Competition Rules</span>
                          </h4>
                          <ul className="space-y-1 text-xs">
                            {event.rules.map((rule, idx) => (
                              <li
                                key={idx}
                                className="flex items-start space-x-2"
                              >
                                <div className="w-1 h-1 bg-[var(--color-royal-blue)] rounded-full mt-2" />
                                <span>{rule}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Equipment */}
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <h4 className="font-semibold text-xs md:text-sm text-[var(--color-royal-blue)] mb-1">
                            Equipment Required:
                          </h4>
                          <p className="text-xs">{event.equipment}</p>
                        </div>

                        <div className="pt-3 md:pt-4 border-t">
                          <Button
                            className="w-full bg-[var(--color-royal-blue)] hover:bg-[var(--color-royal-blue)]/90 text-sm md:text-base"
                            asChild
                          >
                            <Link href="/students/register">
                              Register for {event.name}
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-orange-500 text-white">
                <CardTitle className="flex items-center space-x-2 text-xl md:text-2xl">
                  <AlertCircle className="h-5 w-5 md:h-6 md:w-6" />
                  <span>Important Sports Tournament Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-3 md:space-y-4">
                    <h3 className="font-semibold text-base md:text-lg flex items-center space-x-2">
                      <Calendar className="h-4 w-4 md:h-5 md:w-5 text-orange-500" />
                      <span>Key Dates</span>
                    </h3>
                    <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-600 mt-0.5" />
                        <span>
                          <strong>Registration Deadline:</strong> October 10,
                          2025
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-600 mt-0.5" />
                        <span>
                          <strong>Team List Submission:</strong> October 10,
                          2025
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <h3 className="font-semibold text-base md:text-lg flex items-center space-x-2">
                      <Medal className="h-4 w-4 md:h-5 md:w-5 text-[var(--color-gold)]" />
                      <span>Prizes & Recognition</span>
                    </h3>
                    <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
                      <li className="flex items-start space-x-2">
                        <Award className="h-3 w-3 md:h-4 md:w-4 text-[var(--color-gold)] mt-0.5" />
                        <span>Gold, Silver, Bronze medals for top 3</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Award className="h-3 w-3 md:h-4 md:w-4 text-[var(--color-gold)] mt-0.5" />
                        <span>Trophies for winning teams</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Award className="h-3 w-3 md:h-4 md:w-4 text-[var(--color-gold)] mt-0.5" />
                        <span>Participation certificates for all</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Award className="h-3 w-3 md:h-4 md:w-4 text-[var(--color-gold)] mt-0.5" />
                        <span>Best Sportsperson awards</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 md:p-6 rounded-lg">
                  <h4 className="font-semibold text-[var(--color-royal-blue)] mb-2 md:mb-3 flex items-center space-x-2">
                    <Timer className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-sm md:text-base">
                      Registration Requirements
                    </span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm">
                    <div>
                      <strong>For Team Sports:</strong> Submit complete team
                      roster with substitutes
                    </div>
                    <div>
                      <strong>Age Proof:</strong> Birth certificate or school ID
                      or addhar card required
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[var(--color-royal-blue)] via-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Ready to Compete?
          </h2>
          <p className="text-blue-200 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
            Join the sports championship and showcase your athletic abilities
            across multiple disciplines
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90 btn-hover-lift text-sm md:text-base px-6 md:px-8 py-2 md:py-3"
              asChild
            >
              <Link href="/students/register">Register for Sports Events</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[var(--color-royal-blue)] btn-hover-lift text-sm md:text-base px-6 md:px-8 py-2 md:py-3 bg-transparent"
              asChild
            >
              <Link href="/events">View All Events</Link>
            </Button>
          </div>

          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <Zap className="h-3 w-3 md:h-4 md:w-4" />
              <span>Professional sports facilities</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
