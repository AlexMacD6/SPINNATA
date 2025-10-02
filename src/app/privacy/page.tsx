import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Spinnata",
  description: "Privacy policy for Spinnata waitlist",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl">🎃</span>
            <span className="text-2xl font-bold text-pumpkin">Spinnata</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 container px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg dark:prose-invert space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-muted-foreground">
              When you join our waitlist, we collect your email address, IP address, 
              browser information, and any UTM parameters from your referral source. 
              This helps us understand how you found us and communicate with you about our launch.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground">
              We use your email address solely to notify you when Spinnata launches and 
              to send you updates about the product. We will never sell your information 
              to third parties or use it for any purpose other than communicating with you 
              about Spinnata.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-muted-foreground">
              We take data security seriously. Your information is stored securely and 
              encrypted. We implement industry-standard security measures to protect 
              your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-muted-foreground">
              You can unsubscribe from our emails at any time by clicking the unsubscribe 
              link in any email we send you. You can also request that we delete your 
              information by contacting us directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at 
              privacy@spinnata.com.
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

