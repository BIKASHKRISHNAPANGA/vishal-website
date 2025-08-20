import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Database, Eye, Lock, Users, Mail, Settings, AlertCircle } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-royal-blue)] via-blue-700 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <Badge className="bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold)]/90">
              Data Protection
            </Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold">
              Privacy <span className="text-[var(--color-gold)]">Policy</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and
              protect your personal information.
            </p>
            <p className="text-sm text-blue-200">
              Last updated: December 2024 | Effective Date: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Introduction */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[var(--color-royal-blue)]/10 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-[var(--color-royal-blue)]" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-[var(--color-royal-blue)]">
                    Introduction
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    School of the Year ("we," "our," or "us") is committed to
                    protecting your privacy and ensuring the security of your
                    personal information. This Privacy Policy explains how we
                    collect, use, disclose, and safeguard your information when
                    you participate in our inter-school academic and sports
                    competition.
                  </p>
                  <p>
                    This policy applies to all participants, including students,
                    parents/guardians, school administrators, and visitors to
                    our website. By registering for our competition or using our
                    services, you consent to the data practices described in
                    this policy.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-l-4 border-[var(--color-royal-blue)]">
                    <p className="text-[var(--color-royal-blue)] font-semibold">
                      We are committed to GDPR compliance and follow
                      international best practices for data protection.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-green-500/10 p-3 rounded-full">
                    <Database className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-[var(--color-royal-blue)]">
                    Information We Collect
                  </h2>
                </div>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">
                      Personal Information:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong>Student Data:</strong> Name, age, grade level,
                        school name, contact information, profile photographs
                      </li>
                      <li>
                        <strong>Parent/Guardian Data:</strong> Name, contact
                        information, relationship to student, consent records
                      </li>
                      <li>
                        <strong>School Data:</strong> School name, principal's
                        information, school address, registration certificates
                      </li>
                      <li>
                        <strong>Academic Records:</strong> Event registrations,
                        test scores, performance data, certificates earned
                      </li>
                      <li>
                        <strong>Medical Information:</strong> Fitness
                        certificates, emergency contact information, dietary
                        restrictions
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">
                      Technical Information:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        IP addresses, browser type, device information,
                        operating system
                      </li>
                      <li>
                        Website usage data, page views, time spent on site,
                        click patterns
                      </li>
                      <li>
                        Cookies and similar tracking technologies for website
                        functionality
                      </li>
                      <li>
                        Login credentials and account security information
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">
                      Payment Information:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        Payment method details (processed securely through
                        third-party payment processors)
                      </li>
                      <li>Transaction history and receipts</li>
                      <li>Billing addresses and contact information</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-500/10 p-3 rounded-full">
                    <Settings className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-[var(--color-royal-blue)]">
                    How We Use Your Information
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We use the collected information for the following purposes:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">
                        Competition Management:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                        <li>Process registrations and payments</li>
                        <li>Organize events and manage schedules</li>
                        <li>Evaluate performance and determine winners</li>
                        <li>Issue certificates and distribute prizes</li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">
                        Communication:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                        <li>Send event updates and notifications</li>
                        <li>Provide customer support</li>
                        <li>Share results and achievements</li>
                        <li>Send promotional materials (with consent)</li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">
                        Safety & Security:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                        <li>Ensure participant safety during events</li>
                        <li>Verify identity and prevent fraud</li>
                        <li>Maintain secure access to accounts</li>
                        <li>Comply with legal requirements</li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">
                        Improvement:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                        <li>Analyze website usage and performance</li>
                        <li>Improve our services and user experience</li>
                        <li>Develop new features and competitions</li>
                        <li>Generate statistical reports</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-purple-500/10 p-3 rounded-full">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-[var(--color-royal-blue)]">
                    Information Sharing & Disclosure
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="font-semibold text-foreground">
                    We do not sell, trade, or rent your personal information to
                    third parties. We may share information only in the
                    following circumstances:
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Service Providers:
                      </h4>
                      <p>
                        We work with trusted third-party service providers who
                        assist us in operating our website, conducting
                        competitions, and serving participants. These providers
                        have access to personal information only as needed to
                        perform their functions and are contractually obligated
                        to maintain confidentiality.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground">
                        Educational Institutions:
                      </h4>
                      <p>
                        We may share academic performance data with
                        participating schools for educational purposes and to
                        facilitate scholarship opportunities, but only with
                        appropriate consent.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground">
                        Legal Requirements:
                      </h4>
                      <p>
                        We may disclose information when required by law, court
                        order, or government regulation, or when we believe
                        disclosure is necessary to protect our rights, safety,
                        or the rights and safety of others.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground">
                        Public Recognition:
                      </h4>
                      <p>
                        Winner names, schools, and achievements may be published
                        for recognition purposes, but only with explicit consent
                        from participants or their guardians.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[var(--color-gold)]/10 p-3 rounded-full">
                    <Lock className="h-6 w-6 text-[var(--color-gold)]" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-[var(--color-royal-blue)]">
                    Data Security
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We implement comprehensive security measures to protect your
                    personal information:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Technical Safeguards:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                        <li>SSL/TLS encryption for data transmission</li>
                        <li>Secure database storage with encryption</li>
                        <li>Regular security audits and updates</li>
                        <li>Firewall protection and intrusion detection</li>
                        <li>
                          Secure payment processing through certified providers
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Administrative Safeguards:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                        <li>Limited access to personal information</li>
                        <li>Employee training on data protection</li>
                        <li>Background checks for staff with data access</li>
                        <li>Regular privacy and security training</li>
                        <li>Incident response procedures</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border-l-4 border-yellow-500">
                    <p className="text-yellow-700 dark:text-yellow-300">
                      <strong>Important:</strong> While we implement strong
                      security measures, no method of transmission over the
                      internet is 100% secure. We cannot guarantee absolute
                      security but are committed to protecting your information
                      using industry-standard practices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-orange-500/10 p-3 rounded-full">
                    <Eye className="h-6 w-6 text-orange-600" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-[var(--color-royal-blue)]">
                    Your Privacy Rights
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    You have the following rights regarding your personal
                    information:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-foreground">
                          Access & Portability:
                        </h4>
                        <p className="text-sm">
                          Request a copy of your personal data in a structured,
                          machine-readable format
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground">
                          Correction:
                        </h4>
                        <p className="text-sm">
                          Update or correct inaccurate personal information
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground">
                          Deletion:
                        </h4>
                        <p className="text-sm">
                          Request deletion of your personal data (subject to
                          legal requirements)
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-foreground">
                          Restriction:
                        </h4>
                        <p className="text-sm">
                          Limit how we process your personal information
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground">
                          Objection:
                        </h4>
                        <p className="text-sm">
                          Object to processing based on legitimate interests
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground">
                          Withdraw Consent:
                        </h4>
                        <p className="text-sm">
                          Withdraw consent for marketing communications at any
                          time
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[var(--color-royal-blue)]/5 p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>To exercise your rights:</strong> Contact our
                      privacy team at privacy@schooloftheyear.com or use the
                      contact information provided below. We will respond to
                      your request within 30 days.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-red-500/10 p-3 rounded-full">
                    <AlertCircle className="h-6 w-6 text-red-600" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-[var(--color-royal-blue)]">
                    Data Retention
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We retain personal information only as long as necessary for
                    the purposes outlined in this policy:
                  </p>

                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Competition Data:</strong> Retained for 7 years
                      for record-keeping and verification purposes
                    </li>
                    <li>
                      <strong>Academic Records:</strong> Maintained for
                      scholarship and recognition purposes (with consent)
                    </li>
                    <li>
                      <strong>Payment Information:</strong> Retained as required
                      by financial regulations (typically 7 years)
                    </li>
                    <li>
                      <strong>Marketing Data:</strong> Retained until consent is
                      withdrawn or account is deleted
                    </li>
                    <li>
                      <strong>Website Analytics:</strong> Anonymized data may be
                      retained indefinitely for statistical purposes
                    </li>
                  </ul>

                  <p>
                    When retention periods expire, we securely delete or
                    anonymize personal information unless longer retention is
                    required by law.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[var(--color-gold)]/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-[var(--color-gold)]" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-[var(--color-royal-blue)]">
                    Contact Us
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    If you have questions about this Privacy Policy or our data
                    practices, please contact us:
                  </p>

                  <div className="bg-muted/50 p-6 rounded-lg space-y-3">
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Privacy Officer
                      </h4>
                      <p>School of the Year Competition</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p>
                          <strong>Email:</strong> info@interschoolosf.in
                        </p>
                        <p>
                          <strong>Phone:</strong> +91 93265 84482
                        </p>
                      </div>
                      <div>
                        <p>
                          <strong>Support Hours:</strong> Monday-Friday
                        </p>
                        <p>8:00 AM - 4:00 PM IST</p>
                      </div>
                    </div>

                    <div>
                      <p>
                        <strong>Mailing Address:</strong>
                      </p>
                      <p>
                        School of the Year
                        <br />
                        [Rai's Aragyanear ,near smart point , 100ft road]
                        <br />
                        [kalyan east, Maharashtra , 421306]
                        <br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border-l-4 border-[var(--color-royal-blue)]">
                    <p className="text-[var(--color-royal-blue)] text-sm">
                      <strong>Policy Updates:</strong> We may update this
                      Privacy Policy periodically. We will notify you of
                      significant changes via email or website notice. Continued
                      use of our services after changes constitutes acceptance
                      of the updated policy.
                    </p>
                  </div>
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
