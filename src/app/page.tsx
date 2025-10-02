import { EmailForm } from "@/components/email-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Gift, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🎃</span>
            <span className="text-2xl font-bold text-pumpkin">Spinnata</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a
              href="#features"
              className="text-sm font-medium transition-colors hover:text-pumpkin"
            >
              How it works
            </a>
            <a
              href="#faq"
              className="text-sm font-medium transition-colors hover:text-pumpkin"
            >
              FAQ
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b">
          <div className="absolute inset-0 bg-gradient-to-br from-pumpkin-50 via-background to-stemGreen-50 dark:from-pumpkin-950 dark:via-background dark:to-stemGreen-950 opacity-50" />
          <div className="container relative px-4 py-16 md:py-24 lg:py-32">
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
              <div className="space-y-4 animate-fade-in-up">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-balance">
                  Make your party{" "}
                  <span className="text-pumpkin">unforgettable.</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl text-balance">
                  Be first to get the Spin-ñata—drop your email below.
                </p>
              </div>

              {/* Email Form */}
              <div
                className="w-full flex justify-center animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <EmailForm />
              </div>

              {/* Product Teaser Video */}
              <div
                className="w-full max-w-3xl mt-8 rounded-xl overflow-hidden shadow-2xl border animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <video
                  className="w-full h-auto hidden sm:block"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/1002.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="sm:hidden aspect-video bg-gradient-to-br from-pumpkin-100 to-stemGreen-100 dark:from-pumpkin-900 dark:to-stemGreen-900 flex items-center justify-center">
                  <span className="text-6xl">🎃</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="features" className="container px-4 py-16 md:py-24">
          <div className="mx-auto max-w-5xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                How it works
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Three simple steps to the most exciting party moment ever
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-2 hover:border-pumpkin transition-colors">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-pumpkin-100 dark:bg-pumpkin-900">
                    <Zap className="h-6 w-6 text-pumpkin" />
                  </div>
                  <CardTitle>1. Spin</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Give it a whirl! The Spin-ñata rotates smoothly, building
                    anticipation with every turn.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-pumpkin transition-colors">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-pumpkin-100 dark:bg-pumpkin-900">
                    <Gift className="h-6 w-6 text-pumpkin" />
                  </div>
                  <CardTitle>2. Unwrap</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Watch as layers peel away in a mesmerizing display. No
                    blindfolds or bats needed!
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-pumpkin transition-colors">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-stemGreen-100 dark:bg-stemGreen-900">
                    <Sparkles className="h-6 w-6 text-stemGreen" />
                  </div>
                  <CardTitle>3. Candy Burst</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Boom! Candy flies everywhere in an epic finale. Safe,
                    reusable, and totally Instagram-worthy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Proof Strip */}
        <section className="border-y bg-muted/50">
          <div className="container px-4 py-8">
            <p className="text-center text-sm font-medium text-muted-foreground">
              🤠 Houston-built • 🎉 Party-tested • ✨ Kid-approved
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="container px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">
                    Is it safe for kids?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolutely! Unlike traditional piñatas, there's no swinging
                    bat or blindfold. Kids simply spin and watch the magic
                    happen. Perfect for indoor or outdoor parties.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Can I reuse it?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! The Spin-ñata is designed to be refillable and
                    reusable. Just reload with candy and you're ready for the
                    next celebration. One investment, unlimited parties.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">When can I buy one?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We're putting the finishing touches on production! Join the
                    waitlist above and you'll be the first to know when we
                    launch. Early subscribers get exclusive pricing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t bg-gradient-to-br from-pumpkin-50 to-stemGreen-50 dark:from-pumpkin-950 dark:to-stemGreen-950">
          <div className="container px-4 py-16 md:py-24">
            <div className="mx-auto max-w-2xl text-center space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to revolutionize your parties?
              </h2>
              <EmailForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎃</span>
              <span className="font-semibold">Spinnata</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Spinnata. All rights reserved.
            </p>
            <nav className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
