import Link from "next/link";

export const metadata = {
  title: "Terms of Service - SPIN-ÑATA",
  description: "Terms of service for SPIN-ÑATA waitlist",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl">🎃</span>
            <span className="text-2xl font-bold text-pumpkin">SPIN-ÑATA</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 container px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="prose prose-lg dark:prose-invert space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Waitlist Terms</h2>
            <p className="text-muted-foreground">
              By joining the SPIN-ÑATA waitlist, you agree to receive email
              communications from us about our product launch and updates. Your
              spot on the waitlist does not constitute a binding commitment to
              purchase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Intellectual Property
            </h2>
            <p className="text-muted-foreground">
              All content, designs, logos, and materials related to SPIN-ÑATA
              are the intellectual property of SPIN-ÑATA and are protected by
              copyright and trademark laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Acceptable Use</h2>
            <p className="text-muted-foreground">
              You agree not to misuse our website or services. This includes but
              is not limited to: attempting to gain unauthorized access,
              submitting false information, or using automated means to submit
              multiple registrations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Limitation of Liability
            </h2>
            <p className="text-muted-foreground">
              SPIN-ÑATA provides this waitlist service &quot;as is&quot; without
              any warranties. We are not liable for any damages arising from
              your use of this website or participation in the waitlist.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these terms at any time. Continued
              use of the waitlist after changes constitutes acceptance of the
              new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-muted-foreground">
              For questions about these terms, please contact us at
              support@treasurehub.club.
            </p>
          </section>

          <p className="text-sm text-muted-foreground mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </main>

      <footer className="border-t">
        <div className="container px-4 py-8">
          <div className="flex justify-center">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
