import { EmailForm } from "@/components/email-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scene3D } from "@/components/3d-scene-wrapper";
import {
  AnimatedSection,
  FadeIn,
  ScaleIn,
} from "@/components/animated-section";
import {
  Sparkles,
  Heart,
  Shield,
  Smile,
  PartyPopper,
  Clock,
  Star,
} from "lucide-react";
import Link from "next/link";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20">
        <div className="container flex h-20 items-center justify-between px-6">
          <FadeIn>
            <div className="flex items-center gap-3">
              <div className="relative">
                <span className="text-4xl animate-pumpkin-spin block">🎃</span>
                <div className="candy-burst-container">
                  <span className="candy-particle">🍬</span>
                  <span className="candy-particle">🍭</span>
                  <span className="candy-particle">🍫</span>
                  <span className="candy-particle">🍬</span>
                  <span className="candy-particle">🍭</span>
                  <span className="candy-particle">🍫</span>
                  <span className="candy-particle">🍬</span>
                  <span className="candy-particle">🍭</span>
                </div>
              </div>
              <span className="text-3xl font-bold gradient-text">
                SPIN-ÑATA
              </span>
            </div>
          </FadeIn>
          <nav className="hidden md:flex gap-8">
            <a
              href="#features"
              className="text-sm font-medium transition-all hover:text-pumpkin-500 hover:scale-105"
            >
              Why Moms Love It
            </a>
            <a
              href="#faq"
              className="text-sm font-medium transition-all hover:text-pumpkin-500 hover:scale-105"
            >
              FAQ
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section with 3D Background */}
      <main className="flex-1">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* 3D Scene Background */}
          <Scene3D />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 pointer-events-none" />

          <div className="container px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Column - Content */}
                <div className="text-center lg:text-left">
                  <AnimatedSection>
                    <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8 animate-pulse-glow">
                      <Sparkles className="w-5 h-5 text-pumpkin-500" />
                      <span className="text-sm font-medium">
                        The Future of Party Fun is Here
                      </span>
                      <Sparkles className="w-5 h-5 text-pumpkin-500" />
                    </div>
                  </AnimatedSection>

                  <AnimatedSection delay={0.2}>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
                      Make Every Birthday{" "}
                      <span className="gradient-text block mt-2">
                        Unforgettable
                      </span>
                    </h1>
                  </AnimatedSection>

                  <AnimatedSection delay={0.4}>
                    <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                      No mess. No fuss. Just <strong>pure joy</strong>. The
                      SPIN-ÑATA brings all the excitement of a traditional
                      piñata with
                      <span className="text-pumpkin-500 font-semibold">
                        {" "}
                        zero cleanup stress
                      </span>
                      .
                    </p>
                  </AnimatedSection>

                  <AnimatedSection delay={0.6}>
                    <div className="glass p-8 rounded-3xl shadow-2xl">
                      <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-2">
                          Be First to Get Yours! 🎉
                        </h2>
                        <p className="text-gray-600">
                          Join 500+ smart moms who are already on the list
                        </p>
                      </div>
                      <EmailForm />
                      <p className="text-sm text-gray-500 mt-4">
                        ✨ No spam—just launch updates. Unsubscribe anytime.
                      </p>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection delay={0.8}>
                    <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-8 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-green-500" />
                        <span>Kid-Safe Design</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-pink-500" />
                        <span>Mom-Approved</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-yellow-500" />
                        <span>Easy Cleanup</span>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>

                {/* Right Column - Video */}
                <AnimatedSection delay={0.3}>
                  <div className="max-w-md mx-auto lg:ml-auto glass rounded-3xl overflow-hidden shadow-2xl">
                    <div className="aspect-[9/16] bg-gradient-to-br from-pumpkin-100 to-emerald-100 flex items-center justify-center relative">
                      <video
                        controls
                        loop
                        muted
                        className="w-full h-full object-cover"
                      >
                        <source src="/1002.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-pumpkin-500 flex items-start justify-center p-2">
              <div className="w-1.5 h-3 rounded-full bg-pumpkin-500 animate-pulse" />
            </div>
          </div>
        </section>

        {/* Features - Why Moms Love It */}
        <section
          id="features"
          className="py-24 bg-gradient-to-b from-transparent to-white/50"
        >
          <div className="container px-4">
            <ScaleIn>
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-4">
                  Why Moms <span className="gradient-text">Love It</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Designed by parents, for parents. Because you deserve a
                  stress-free party!
                </p>
              </div>
            </ScaleIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <AnimatedSection delay={0.1}>
                <Card className="glass border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pumpkin-400 to-pumpkin-600 flex items-center justify-center mb-4 animate-pulse-glow">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">5-Minute Setup</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      Fill it, hang it, spin it—done! No complicated assembly.
                      More time for cake, less time prepping. Perfect for busy
                      moms!
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <Card className="glass border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mb-4 animate-pulse-glow">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">
                      Zero Mess Cleanup
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      Candy drops in a neat circle—no more crawling under
                      tables! Controlled release means you can actually enjoy
                      the party too.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <Card className="glass border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center mb-4 animate-pulse-glow">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">100% Kid-Safe</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      No sticks, no blindfolds, no injuries. Every child can
                      participate safely. Peace of mind for you, fun for
                      everyone!
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            {/* Additional Benefits */}
            <AnimatedSection delay={0.4}>
              <div className="mt-16 max-w-4xl mx-auto glass p-12 rounded-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">
                        Reusable Design
                      </h3>
                      <p className="text-gray-600">
                        Use it for multiple parties. Better for your wallet and
                        the planet!
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <PartyPopper className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">
                        Instagram-Worthy
                      </h3>
                      <p className="text-gray-600">
                        Colorful, fun, and makes for amazing party photos and
                        videos!
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Smile className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">
                        All Ages Welcome
                      </h3>
                      <p className="text-gray-600">
                        From toddlers to grandparents—everyone can join the fun!
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">
                        Stress-Free Hosting
                      </h3>
                      <p className="text-gray-600">
                        Finally, a party activity that doesn&apos;t add to your
                        to-do list!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 relative">
          <div className="container px-4">
            <ScaleIn>
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-4">
                  Simple <span className="gradient-text">Pricing</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Everything you need for unforgettable parties
                </p>
              </div>
            </ScaleIn>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <AnimatedSection delay={0.1}>
                <Card className="glass border-2 border-pumpkin-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-3xl mb-2">SPIN-ÑATA</CardTitle>
                    <div className="text-5xl font-bold gradient-text mb-2">
                      $99
                    </div>
                    <p className="text-gray-600">Base Unit</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-green-500" />
                        Reusable design
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-green-500" />
                        Kid-safe construction
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-green-500" />
                        5-minute setup
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-green-500" />
                        Zero mess cleanup
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <Card className="glass border-2 border-pumpkin-500 shadow-2xl hover:shadow-pumpkin-500/50 transition-all duration-300 hover:-translate-y-2 h-full relative overflow-hidden">
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-pumpkin-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    BEST VALUE
                  </div>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-3xl mb-2">
                      Complete Party Pack
                    </CardTitle>
                    <div className="text-5xl font-bold gradient-text mb-2">
                      $129
                    </div>
                    <p className="text-gray-600">SPIN-ÑATA + 6lbs Candy</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-pink-500" />
                        Everything in Base Unit
                      </li>
                      <li className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-pink-500" />6 pounds of
                        premium candy
                      </li>
                      <li className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-pink-500" />
                        Ready to party immediately
                      </li>
                      <li className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-pink-500" />
                        Perfect for 20-30 kids
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24">
          <div className="container px-4">
            <ScaleIn>
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-4">
                  Questions?{" "}
                  <span className="gradient-text">We&apos;ve Got Answers</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Everything you need to know about the SPIN-ÑATA
                </p>
              </div>
            </ScaleIn>

            <div className="max-w-3xl mx-auto space-y-6">
              <AnimatedSection delay={0.1}>
                <div className="glass p-8 rounded-2xl">
                  <h3 className="text-xl font-bold mb-3">How does it work?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Simply fill the SPIN-ÑATA with candy and treats, hang it up,
                    and let kids give it a spin! When it spins fast enough,
                    treats release in a controlled way—no mess, all fun!
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="glass p-8 rounded-2xl">
                  <h3 className="text-xl font-bold mb-3">
                    Is it safe for young children?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Absolutely! No sticks or blindfolds means no risk of
                    injuries. It&apos;s designed for ages 3+ and even toddlers
                    can safely participate with parent supervision.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="glass p-8 rounded-2xl">
                  <h3 className="text-xl font-bold mb-3">Can I reuse it?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Yes! The SPIN-ÑATA is built to last through multiple
                    parties. Just refill and you&apos;re ready for the next
                    celebration. Better value and better for the environment!
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="glass p-8 rounded-2xl">
                  <h3 className="text-xl font-bold mb-3">
                    When will it be available?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We&apos;re launching soon! Join the waitlist above to be
                    first in line and get exclusive early-bird pricing and
                    special launch bonuses.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pumpkin-500 via-orange-500 to-emerald-500 opacity-5" />
          <div className="container px-4 relative z-10">
            <ScaleIn>
              <div className="max-w-4xl mx-auto text-center glass p-12 md:p-16 rounded-3xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform <br className="hidden sm:block" />
                  <span className="gradient-text">Your Next Party?</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join hundreds of smart moms who are saying goodbye to messy
                  cleanups and hello to stress-free celebrations!
                </p>
                <div className="inline-flex flex-col items-center gap-4">
                  <ScrollToTopButton className="px-12 py-4 bg-gradient-to-r from-pumpkin-500 to-orange-500 text-white font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-2xl hover:shadow-pumpkin-500/50">
                    Get Early Access Now
                  </ScrollToTopButton>
                </div>
              </div>
            </ScaleIn>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="glass border-t border-white/20">
        <div className="container px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🎃</span>
              <span className="text-xl font-bold gradient-text">SPIN-ÑATA</span>
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} TreasureHub LLC. Making parties
              unforgettable.
            </p>
            <nav className="flex gap-8">
              <Link
                href="/privacy"
                className="text-sm text-gray-600 hover:text-pumpkin-500 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-600 hover:text-pumpkin-500 transition-colors"
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
