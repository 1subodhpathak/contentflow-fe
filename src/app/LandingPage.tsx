import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"
import { Play, Zap, BarChart3, PenSquare } from "lucide-react"
import { ThemeToggle } from "../components/theme-toggle"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-foreground">
                Content
                <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-800 bg-clip-text text-transparent">Flow</span>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="#features" className="text-muted-foreground hover:text-foreground font-medium">
                Features
              </Link>
              <Link to="#testimonials" className="text-muted-foreground hover:text-foreground font-medium">
                Testimonials
              </Link>
              <Link to="#faq" className="text-muted-foreground hover:text-foreground font-medium">
                FAQ
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link to="/auth">
                <Button variant="outline" className="border-border cursor-pointer text-foreground hover:bg-accent bg-transparent">
                  Login
                </Button>
              </Link>
              <Link to="/auth">
                <Button className="cursor-pointer bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white font-medium">
                  Get Started Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Automate Your Social Media
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
              with the Power of AI
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            ContentFlow is your AI-powered social media manager. Create, optimize, and distribute your content across
            all platforms with intelligent automation, saving you 40+ hours a month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/auth">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white font-medium px-8 py-4 text-lg"
              >
                Get Started with AI
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-accent px-8 py-4 text-lg bg-transparent"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
          <p className="text-muted-foreground font-medium">Trusted by 10,000+ creators and brands worldwide</p>

          {/* Hero Image Placeholder */}
          <div className="mt-16 relative">
            <div className="bg-gradient-to-br from-muted to-muted/50 rounded-2xl p-8 shadow-2xl">
              <img
                src="/placeholder.svg?height=400&width=800&text=ContentFlow+Dashboard+Preview"
                alt="Content Flow Dashboard"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* "Trusted By" Section */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Trusted by the world's best companies
            </p>
            <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                  alt="StaticKit"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                  alt="Transistor"
                />
              </div>
              <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                  alt="Workcation"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Everything You Need to Go Viral</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered tools help you create, optimize, and distribute content that gets noticed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <PenSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">AI Caption Generation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Generate engaging, platform-specific captions that match your brand voice and maximize engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Smart Format Conversion</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Automatically convert your content to optimal formats for each platform, from YouTube to TikTok.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Performance Prediction</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Predict content performance before publishing with AI-powered analytics to maximize your reach.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started in just three simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4">
                1
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">Upload Your Content</h3>
              <p className="text-muted-foreground">
                Upload a video, image, or document. Our AI will analyze it in seconds.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4">
                2
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">Let AI Do the Work</h3>
              <p className="text-muted-foreground">
                Our AI generates captions, converts formats, and predicts performance for you.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4">
                3
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">Publish and Grow</h3>
              <p className="text-muted-foreground">
                Publish your optimized content to all your social platforms with one click.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Customers Are Saying</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what some of our users have to say.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  "ContentFlow has been a game-changer for our marketing team. We're able to create and distribute
                  high-quality content faster than ever before."
                </p>
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full mr-4"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div>
                    <p className="text-lg font-semibold text-foreground">Sarah Johnson</p>
                    <p className="text-muted-foreground">Marketing Manager, Acme Inc.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  "As a solo creator, I was struggling to keep up with all the different platforms. ContentFlow has
                  saved me so much time and helped me grow my audience."
                </p>
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full mr-4"
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div>
                    <p className="text-lg font-semibold text-foreground">Michael Lee</p>
                    <p className="text-muted-foreground">Content Creator</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-[#312E81] to-[#821842]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
              Have a question? We've got answers.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            <AccordionItem value="item-1" className="border-cyan-400/50">
              <AccordionTrigger className="text-white hover:no-underline">
                Is there a free trial available?
              </AccordionTrigger>
              <AccordionContent className="text-cyan-100">
                Yes, you can try ContentFlow for free for 14 days. If you want, you can upgrade to a paid plan at any
                time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-cyan-400/50">
              <AccordionTrigger className="text-white hover:no-underline">
                What social media platforms do you support?
              </AccordionTrigger>
              <AccordionContent className="text-cyan-100">
                We support all major social media platforms, including YouTube, Instagram, TikTok, LinkedIn, Twitter,
                and Facebook.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-cyan-400/50">
              <AccordionTrigger className="text-white hover:no-underline">
                Can I cancel my subscription at any time?
              </AccordionTrigger>
              <AccordionContent className="text-cyan-100">
                Yes, you can cancel your subscription at any time. You'll continue to have access to your account
                until the end of your billing period.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-cyan-400/50">
              <AccordionTrigger className="text-white hover:no-underline">
                How does the AI work?
              </AccordionTrigger>
              <AccordionContent className="text-cyan-100">
                Our AI is trained on millions of data points to understand what makes content engaging. It analyzes your
                content and provides suggestions to help you improve it.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold text-white">Ready to get started?</h3>
            <p className="text-lg text-cyan-100 mt-2 mb-8">
              Start your free 14-day trial today. No credit card required.
            </p>
            <Link to="/auth">
              <Button
                size="lg"
                variant="outline"
                className="bg-white cursor-pointer text-cyan-600 hover:bg-gray-100 hover:text-cyan-700 px-8 py-4 text-lg font-medium"
              >
                Sign Up for Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-foreground mb-4">
                Content
                <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">Flow</span>
              </div>
              <p className="text-muted-foreground">AI-powered social media management for modern creators.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link to="#" className="hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-foreground">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link to="#" className="hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-foreground">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link to="#" className="hover:text-foreground">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-foreground">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Content Flow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}