"use client";
import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
interface StatCardProps {
  number: string;
  label: string;
  delay?: number;
}

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

interface StepProps {
  number: number;
  title: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`bg-white p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } hover:-translate-y-3 relative overflow-hidden group flex flex-col items-center justify-center`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      <div className="text-5xl font-bold text-red-500 mb-4 text-center break-words">
        {number}
      </div>
      <div className="text-lg text-gray-600 text-center font-bold">{label}</div>
    </div>
  );
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
      <div className="text-5xl mb-6 opacity-80">{icon}</div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="opacity-90">{description}</p>
    </div>
  );
};

const Step: React.FC<StepProps> = ({ number, title, description }) => {
  return (
    <div className="text-center">
      <div className="inline-block w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full leading-[4rem] text-2xl font-bold mb-6">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-slate-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const SafeOilLanding: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleEmailSubmit = (): void => {
    if (email && email.includes("@")) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const scrollToSection = (elementId: string): void => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-700 to-indigo-800 text-white py-24 min-h-screen flex items-center overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 -left-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-20 -right-20 w-80 h-80 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-10 left-1/4 w-72 h-72 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-red-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-1000"></div>
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          {/* Enhanced Brand Section */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
                <Image src={logo} alt="Ofood Logo" className="w-14 h-14" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full -z-10 animate-pulse"></div>
            </div>
            <div className="text-left">
              <span className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                by Ofood
              </span>
              <div className="text-sm opacity-80 font-medium">
                Food Technology Innovation
              </div>
            </div>
          </div>

          {/* Enhanced Main Heading */}
          <div className="mb-8">
            <h1 className="text-7xl md:text-8xl font-black mb-4 relative">
              <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent animate-pulse">
                SafeOil
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-xl -z-10"></div>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full animate-pulse"></div>
          </div>

          {/* Enhanced Subtitle */}
          <div className="max-w-4xl mx-auto mb-10">
            <p className="text-2xl md:text-3xl mb-4 font-medium leading-relaxed">
              <span className="bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent font-bold">
                Revolutionary blockchain-powered
              </span>
              <br />
              oil authentication system
            </p>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Protecting consumers from adulterated cooking oil with instant QR
              verification<br></br> and AI-powered fraud detection
            </p>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full border border-white/20">
              <span className="text-sm font-semibold">
                🔒 Blockchain Secured
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full border border-white/20">
              <span className="text-sm font-semibold">🤖 AI Powered</span>
            </div>
            <div className="bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full border border-white/20">
              <span className="text-sm font-semibold">⚡ Instant Results</span>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => scrollToSection("demo")}
              className="group relative bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/25"
            >
              <span className="relative z-10">🚀 Try QR Demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection("signup")}
              className="group relative bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:-translate-y-2 hover:bg-white/20 hover:shadow-2xl hover:shadow-white/25"
            >
              <span className="relative z-10">🛡️ Join Pilot Program</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Stats Preview */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-lg p-4 rounded-2xl border border-white/10">
              <div className="text-2xl font-bold text-yellow-300">10,000+</div>
              <div className="text-sm opacity-80">Tons Prevented</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg p-4 rounded-2xl border border-white/10">
              <div className="text-2xl font-bold text-green-300">98%</div>
              <div className="text-sm opacity-80">Accuracy Rate</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg p-4 rounded-2xl border border-white/10">
              <div className="text-2xl font-bold text-blue-300">2 Seconds</div>
              <div className="text-sm opacity-80">Verification Time</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg p-4 rounded-2xl border border-white/10">
              <div className="text-2xl font-bold text-purple-300">24/7</div>
              <div className="text-sm opacity-80">Protection</div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <div className="w-8 h-8 bg-yellow-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce animation-delay-2000">
          <div className="w-6 h-6 bg-green-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-1/2 left-5 animate-bounce animation-delay-1000">
          <div className="w-4 h-4 bg-pink-400 rounded-full opacity-60"></div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-8xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-12 text-slate-800">
            The Crisis We&apos;re Solving
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr_1fr_1fr] gap-8 mb-12">
            <StatCard
              number="10.000+"
              label="Tons of Adulterated Oil"
              delay={0}
            />
            <StatCard
              number="8.200.000.000đ"
              label="in Illegal Revenue"
              delay={200}
            />
            <StatCard
              number="Millions"
              label="Health Risks Created"
              delay={400}
            />
            <StatCard number="Zero" label="Consumer Protection" delay={600} />
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-600 leading-relaxed">
              Tens of thousands of tons of unrefined animal feed oil have been
              disguised as safe cooking oil, reaching collective kitchens,
              restaurants, and food processing facilities across Vietnam. The
              health consequences include liver damage, cardiovascular issues,
              and cancer risks.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            Our Smart Solution
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon="🔗"
              title="Blockchain Traceability"
              description="Every drop of oil tracked from source to shelf with immutable blockchain records"
            />
            <FeatureCard
              icon="📱"
              title="Instant Verification"
              description="Scan QR codes with our mobile app for immediate authenticity verification"
            />
            <FeatureCard
              icon="🤖"
              title="AI Detection"
              description="Advanced AI algorithms detect adulteration patterns and quality issues"
            />
            <FeatureCard
              icon="👥"
              title="Community Reports"
              description="Crowdsourced safety reports from consumers and industry professionals"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 text-slate-800">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <Step
              number={1}
              title="Producer Registration"
              description="Oil manufacturers register their products on our blockchain platform with complete supply chain data"
            />
            <Step
              number={2}
              title="QR Code Generation"
              description="Each oil container receives a unique QR code linked to its blockchain record"
            />
            <Step
              number={3}
              title="Consumer Verification"
              description="Customers scan the QR code to instantly verify authenticity and safety"
            />
            <Step
              number={4}
              title="AI Monitoring"
              description="Continuous AI analysis detects anomalies and potential adulteration cases"
            />
          </div>
        </div>
      </section>

      {/* Interactive QR Demo Section */}
      <section
        id="demo"
        className="py-20 bg-gradient-to-r from-green-500 to-emerald-600 text-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <Image src={logo} alt="Ofood Logo" className="w-11 h-11" />
              </div>
              <span className="text-lg font-semibold opacity-90">
                Powered by Ofood
              </span>
            </div>
            <h2 className="text-4xl font-bold">Try Our QR Verification Demo</h2>
          </div>
          <p className="text-xl text-center mb-12 opacity-90">
            Experience how consumers and restaurants can instantly verify oil
            authenticity
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Demo Interface */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center">
                    <Image
                      src={logo}
                      alt="Ofood Logo"
                      className="w-14 h-14"
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-600">
                    Ofood Technology
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800">
                  SafeOil Scanner
                </h3>
              </div>

              {/* Sample QR Codes */}
              <div className="space-y-4 mb-6">
                <div className="bg-gray-100 p-4 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center text-white text-xs">
                      QR
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-800">
                        Premium Oil Co. - Batch #2025001
                      </div>
                      <div className="text-sm text-gray-600">
                        Scan to verify authenticity
                      </div>
                    </div>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
                      Scan
                    </button>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center text-white text-xs">
                      QR
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-800">
                        Unknown Brand - Batch #FAKE001
                      </div>
                      <div className="text-sm text-gray-600">
                        Scan to verify authenticity
                      </div>
                    </div>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors">
                      Scan
                    </button>
                  </div>
                </div>
              </div>

              {/* Results Display */}
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                    ✓
                  </div>
                  <div className="font-semibold text-green-800">
                    Verified Authentic
                  </div>
                </div>
                <div className="text-sm text-green-700 space-y-1">
                  <div>
                    <strong>Producer:</strong> Premium Oil Co.
                  </div>
                  <div>
                    <strong>Origin:</strong> An Giang Province
                  </div>
                  <div>
                    <strong>Production Date:</strong> 15/08/2025
                  </div>
                  <div>
                    <strong>Blockchain ID:</strong> 0x4a7b9c...
                  </div>
                  <div>
                    <strong>Trust Score:</strong> 98/100
                  </div>
                </div>
              </div>
            </div>

            {/* Educational Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">How It Protects You</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                    📱
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Instant Verification
                    </h4>
                    <p className="opacity-90">
                      Scan any oil container QR code to get immediate blockchain
                      verification results
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                    🛡️
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Fraud Detection
                    </h4>
                    <p className="opacity-90">
                      Our AI system identifies counterfeit products and alerts
                      authorities automatically
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                    📊
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Trust Metrics
                    </h4>
                    <p className="opacity-90">
                      View detailed trust scores, production history, and safety
                      certifications
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl">
                <h4 className="text-xl font-semibold mb-3">
                  Join the Pilot Program
                </h4>
                <p className="opacity-90 mb-4">
                  Be among the first to test our system and help protect your
                  community from food fraud.
                </p>
                <button
                  onClick={() => scrollToSection("signup")}
                  className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  Sign Up for Early Access
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MVP Demo */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">Experience SafeOil</h2>
          <p className="text-xl mb-12 opacity-90">
            See how our app protects you and your family
          </p>

          <div className="max-w-sm mx-auto bg-gray-900 rounded-3xl p-6 shadow-2xl">
            <div className="bg-white rounded-2xl p-8 text-gray-800 min-h-[500px] flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold mb-6 text-slate-800">
                SafeOil Scanner
              </h3>

              <div className="w-32 h-32 bg-gray-800 rounded-xl mb-6 flex items-center justify-center text-white text-sm">
                QR Scanner View
              </div>

              <div className="w-full space-y-4">
                <div className="bg-green-500 text-white p-3 rounded-xl font-semibold">
                  ✅ Verified Safe
                </div>
                <div className="text-left space-y-1 text-sm text-gray-600">
                  <div>
                    <strong>Brand:</strong> Premium Oil Co.
                  </div>
                  <div>
                    <strong>Origin:</strong> An Giang Province
                  </div>
                  <div>
                    <strong>Production:</strong> 15/08/2025
                  </div>
                  <div>
                    <strong>Certifications:</strong> ISO 22000, HACCP
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-lg opacity-90 max-w-2xl mx-auto">
            Our pilot program starts in urban markets across major cities.
            Download the app and be among the first to ensure your family&apos;s
            safety.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="signup" className="py-20 bg-blue-500 text-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">Join Our Pilot Program</h2>
          <p className="text-xl mb-12">
            Help us test and improve SafeOil while protecting your community
            from food fraud
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Signup Form */}
            <div className="bg-white/50 backdrop-blur-lg p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Get Early Access</h3>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleEmailSubmit();
                }}
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    className="px-6 py-4 rounded-full text-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-white/50"
                    placeholder="Full Name"
                    required
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-6 py-4 rounded-full text-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-white/50"
                    placeholder="Email Address"
                    required
                  />
                </div>

                <select className="w-full px-6 py-4 rounded-full text-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-white/50">
                  <option value="">Select User Type</option>
                  <option value="consumer">Consumer</option>
                  <option value="restaurant">Restaurant Owner</option>
                  <option value="retailer">Retailer</option>
                  <option value="distributor">Distributor</option>
                </select>

                <input
                  type="text"
                  className="w-full px-6 py-4 rounded-full text-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-white/50"
                  placeholder="City/Province"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-white text-red-500 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  {isSubmitted
                    ? "✓ Successfully Registered!"
                    : "Join Pilot Program"}
                </button>
              </form>

              <p className="mt-6 text-sm opacity-90">
                * Pilot participants will receive early access to the app, QR
                verification tools, and priority support.
              </p>
            </div>

            {/* Pilot Program Benefits */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">What You&apos;ll Get</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                    🚀
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Early Access</h4>
                    <p className="opacity-90">
                      Be first to use our QR verification system before public
                      launch
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                    📱
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Free Mobile App
                    </h4>
                    <p className="opacity-90">
                      Complete access to SafeOil scanner and blockchain
                      verification
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                    💬
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Direct Feedback Channel
                    </h4>
                    <p className="opacity-90">
                      Help shape the product with your input and suggestions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                    🏆
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Safety Champion Status
                    </h4>
                    <p className="opacity-90">
                      Recognition for helping combat food fraud in your
                      community
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-2xl">
                <h4 className="text-xl font-semibold mb-3">
                  Pilot Program Goals
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-2xl font-bold">1,000+</div>
                    <div className="opacity-90">Active Users</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">10,000+</div>
                    <div className="opacity-90">QR Scans</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">50+</div>
                    <div className="opacity-90">Fraud Detections</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">95%</div>
                    <div className="opacity-90">Trust Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Ofood Section */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-25 h-25 bg-white rounded-full flex items-center justify-center">
                <Image src={logo} alt="Ofood Logo" className="w-19 h-19" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-slate-800">
                  About Ofood
                </h2>
                <p className="text-xl text-gray-600">
                  Leading Food Technology Innovation
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Innovation Leader
              </h3>
              <p className="text-gray-600">
                Ofood is at the forefront of food technology innovation,
                developing cutting-edge solutions for food safety and
                traceability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Food Safety Experts
              </h3>
              <p className="text-gray-600">
                Our team of experts specializes in blockchain technology, AI,
                and food safety systems to protect consumers worldwide.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                Global Impact
              </h3>
              <p className="text-gray-600">
                Committed to eliminating food fraud globally, starting with
                Southeast Asia&apos;s cooking oil supply chain.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              SafeOil is Ofood&apos;s flagship product in the fight against food
              fraud. We leverage advanced blockchain technology and AI to create
              transparent, trustworthy food supply chains that protect consumers
              and honest businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
              <Image src={logo} alt="Ofood Logo" className="w-10 h-10" />
            </div>
            <span className="text-2xl font-semibold">Ofood</span>
          </div>
          <p className="text-lg mb-3">
            © 2025 SafeOil by Ofood - Smart Certification System. Protecting
            consumers through blockchain technology.
          </p>
          <p className="opacity-80 mb-2">
            A product of Ofood Technology Solutions
          </p>
          <p className="opacity-80">
            Contact: info@ofood.vn | Email: support@safeoil.vn | Phone: +84 123
            456 789
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SafeOilLanding;
