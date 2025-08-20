import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Users, Shield, CreditCard, AlertTriangle, Trophy, Scale, Clock } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-royal-blue)] via-blue-700 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <Badge className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90">
              Legal Information
            </Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold">
              Terms &{" "}
              <span className="text-[var(--color-gold)]">Conditions</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Please read these terms carefully before participating in the
              School of the Year competition
            </p>
            <p className="text-sm text-blue-200">Last updated: December 2024</p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Acceptance of Terms */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[var(--color-royal-blue)]/10 p-3 rounded-full">
                    <Scale className="h-6 w-6 text-[var(--color-royal-blue)]" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-[var(--color-royal-blue)]">
                    Acceptance of Terms
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    By registering for and participating in the "School of the
                    Year" competition, you acknowledge that you have read,
                    understood, and agree to be bound by these Terms and
                    Conditions. These terms constitute a legally binding
                    agreement between you (the participant) and the competition
                    organizers.
                  </p>
                  <p>
                    If you are under 18 years of age, your parent or legal
                    guardian must also agree to these terms on your behalf.
                    Participation in the competition constitutes acceptance of
                    all rules, regulations, and decisions made by the organizing
                    committee.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Eligibility Criteria */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-green-500/10 p-3 rounded-full">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-[var(--color-royal-blue)]">
                    Eligibility Criteria
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <h3 className="font-semibold text-foreground">
                    Student Eligibility:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Must be currently enrolled in grades 5-10 in a recognized
                      educational institution
                    </li>
                    <li>
                      Age categories: Category 1 (5th-6th grade), Category 2
                      (7th-8th grade), Category 3 (9th-10th grade)
                    </li>
                    <li>
                      Must provide valid school identification and grade
                      verification
                    </li>
                    <li>
                      Homeschooled students accepted with proper documentation
                    </li>
                    <li>
                      Must have parental/guardian consent if under 18 years of
                      age
                    </li>
                  </ul>

                  <h3 className="font-semibold text-foreground mt-6">
                    School Eligibility:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Must be a recognized educational institution</li>
                    <li>
                      School registration must be completed by authorized
                      personnel (Principal/Vice-Principal)
                    </li>
                    <li>
                      Must provide valid school registration certificates and
                      authorization letters
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Registration Rules */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-500/10 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-[var(--color-royal-blue)]">
                    Registration Rules
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Registration deadline: October 20, 2024, 11:59 PM IST
                    </li>
                    <li>
                      All information provided must be accurate and verifiable
                    </li>
                    <li>
                      False information may result in immediate disqualification
                    </li>
                    <li>
                      Registration fees are non-transferable between
                      participants
                    </li>
                    <li>
                      Participants may register for multiple events with
                      separate fees
                    </li>
                    <li>
                      Late registrations will not be accepted under any
                      circumstances
                    </li>
                    <li>
                      Confirmation emails must be preserved as proof of
                      registration
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Payment & Refund Policy */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[var(--color-gold)]/10 p-3 rounded-full">
                    <CreditCard className="h-6 w-6 text-[var(--color-gold)]" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-[var(--color-royal-blue)]">
                    Payment & Refund Policy
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <h3 className="font-semibold text-foreground">
                    Payment Terms:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Registration fees: ₹299 per individual event, ₹293-295 per
                      team event participant
                    </li>
                    <li>
                      Payment must be completed at the time of registration
                    </li>
                    <li>
                      All payments are processed through secure, encrypted
                      payment gateways
                    </li>
                    <li>
                      Payment receipts will be sent via email immediately after
                      successful transaction
                    </li>
                  </ul>

                  <h3 className="font-semibold text-foreground mt-6">
                    Refund Policy:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>All registrations are final and non-refundable.</li>
                    <li>
                      We encourage participants to review event details
                      carefully before registering.
                    </li>
                    <li>
                      In case of event cancellation by the organizers,
                      alternative arrangements or credits may be offered.
                    </li>
                    <li>Thank you for your understanding and support.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Code of Conduct */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-purple-500/10 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-[var(--color-royal-blue)]">
                    Code of Conduct
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="font-semibold text-foreground">
                    All participants must adhere to the following conduct
                    standards:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Maintain respectful behavior towards fellow participants,
                      organizers, and officials
                    </li>
                    <li>
                      Follow all safety guidelines and instructions provided by
                      event staff
                    </li>
                    <li>
                      Arrive punctually for all scheduled events and activities
                    </li>
                    <li>Dress appropriately according to event requirements</li>
                    <li>
                      Use appropriate language and avoid any form of harassment
                      or discrimination
                    </li>
                    <li>Respect venue property and maintain cleanliness</li>
                    <li>
                      Follow fair play principles in all competitive events
                    </li>
                    <li>
                      Accept judges' and officials' decisions with sportsmanship
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Competition Rules */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-orange-500/10 p-3 rounded-full">
                    <Trophy className="h-6 w-6 text-orange-600" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-[var(--color-royal-blue)]">
                    Competition Rules
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <h3 className="font-semibold text-foreground">
                    Academic Events:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Minimum 50% score required to qualify for finals</li>
                    <li>
                      No external materials, calculators, or electronic devices
                      allowed
                    </li>
                    <li>
                      Cheating or unfair practices result in immediate
                      disqualification
                    </li>
                  </ul>

                  <h3 className="font-semibold text-foreground mt-6">
                    Sports Events:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Standard international/national rules apply for each sport
                    </li>
                    <li>Age-appropriate categories: U-12, U-14, U-16</li>
                    <li>
                      Medical fitness certificate mandatory for participation
                    </li>
                    <li>
                      Protective gear required as per sport-specific regulations
                    </li>
                    <li>
                      Unsportsmanlike conduct may result in disqualification
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Disqualification Rules */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-red-500/10 p-3 rounded-full">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-[var(--color-royal-blue)]">
                    Disqualification Rules
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="font-semibold text-foreground">
                    Participants may be disqualified for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Providing false or misleading information during
                      registration
                    </li>
                    <li>
                      Cheating, plagiarism, or any form of academic dishonesty
                    </li>
                    <li>
                      Unsportsmanlike conduct or violation of fair play
                      principles
                    </li>
                    <li>
                      Harassment, discrimination, or inappropriate behavior
                    </li>
                    <li>
                      Failure to follow safety guidelines or event instructions
                    </li>
                    <li>
                      Use of prohibited substances or performance-enhancing
                      drugs
                    </li>
                    <li>Damage to venue property or equipment</li>
                    <li>Repeated violations of competition rules</li>
                  </ul>
                  <p className="mt-4 font-semibold text-red-600">
                    Disqualified participants forfeit all rights to prizes,
                    certificates, and refunds.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Liability & Disclaimers */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gray-500/10 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-gray-600" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-[var(--color-royal-blue)]">
                    Liability & Disclaimers
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Participants join at their own risk and responsibility
                    </li>
                    <li>
                      Organizers are not liable for personal injuries,
                      accidents, or loss of personal property
                    </li>
                    <li>
                      Medical emergencies will be handled with available first
                      aid, but participants should have adequate insurance
                    </li>
                    <li>
                      Event schedules, venues, and formats may change due to
                      unforeseen circumstances
                    </li>
                    <li>
                      Organizers reserve the right to modify rules and
                      regulations with reasonable notice
                    </li>
                    <li>
                      Photography and videography may occur during events for
                      promotional purposes
                    </li>
                    <li>
                      Participants consent to use of their likeness in
                      competition materials
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[var(--color-gold)]/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-[var(--color-gold)]" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-[var(--color-royal-blue)]">
                    Questions & Support
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    For questions regarding these terms and conditions or any
                    aspect of the competition, please contact our support team:
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p>
                      <strong>Email:</strong> legal@schooloftheyear.com
                    </p>
                    <p>
                      <strong>Phone:</strong> +91-XXXX-XXXXXX
                    </p>
                    <p>
                      <strong>Support Hours:</strong> Monday-Friday, 9:00 AM -
                      6:00 PM IST
                    </p>
                  </div>
                  <p className="text-sm">
                    These terms and conditions are governed by the laws of
                    India. Any disputes will be subject to the jurisdiction of
                    courts in [City], India.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
