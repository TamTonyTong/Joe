"use client"
import React, { useState, useEffect, useRef } from 'react';

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
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } hover:-translate-y-3 relative overflow-hidden group flex flex-col items-center justify-center`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      <div className="text-5xl font-bold text-red-500 mb-4 text-center break-words">{number}</div>
      <div className="text-lg text-gray-600 text-center">{label}</div>
    </div>
  );
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
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
  const [email, setEmail] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleEmailSubmit = (): void => {
    if (email && email.includes('@')) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    } else {
      alert('Please enter a valid email address.');
    }
  };

  const scrollToSection = (elementId: string): void => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-700 to-indigo-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in-down">
            SafeOil
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up">
            Revolutionary blockchain-powered oil authentication system protecting consumers from adulterated cooking oil
          </p>
          <button
            onClick={() => scrollToSection('signup')}
            className="inline-block bg-red-500 hover:bg-red-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl animate-pulse"
          >
            Join the Safety Revolution
          </button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-8xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-12 text-slate-800">
            The Crisis We&apos;re Solving
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr_1fr_1fr] gap-8 mb-12">
            <StatCard number="10.000+" label="Tons of Adulterated Oil" delay={0} />
            <StatCard number="8.200.000.000đ" label="in Illegal Revenue" delay={200} />
            <StatCard number="Millions" label="Health Risks Created" delay={400} />
            <StatCard number="Zero" label="Consumer Protection" delay={600} />
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-600 leading-relaxed">
              Tens of thousands of tons of unrefined animal feed oil have been disguised as safe cooking oil, 
              reaching collective kitchens, restaurants, and food processing facilities across Vietnam. 
              The health consequences include liver damage, cardiovascular issues, and cancer risks.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">Our Smart Solution</h2>
          
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
          <h2 className="text-5xl font-bold text-center mb-16 text-slate-800">How It Works</h2>
          
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

      {/* MVP Demo */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">Experience SafeOil</h2>
          <p className="text-xl mb-12 opacity-90">See how our app protects you and your family</p>
          
          <div className="max-w-sm mx-auto bg-gray-900 rounded-3xl p-6 shadow-2xl">
            <div className="bg-white rounded-2xl p-8 text-gray-800 min-h-[500px] flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold mb-6 text-slate-800">SafeOil Scanner</h3>
              
              <div className="w-32 h-32 bg-gray-800 rounded-xl mb-6 flex items-center justify-center text-white text-sm">
                QR Scanner View
              </div>
              
              <div className="w-full space-y-4">
                <div className="bg-green-500 text-white p-3 rounded-xl font-semibold">
                  ✅ Verified Safe
                </div>
                <div className="text-left space-y-1 text-sm text-gray-600">
                  <div><strong>Brand:</strong> Premium Oil Co.</div>
                  <div><strong>Origin:</strong> An Giang Province</div>
                  <div><strong>Production:</strong> 15/08/2025</div>
                  <div><strong>Certifications:</strong> ISO 22000, HACCP</div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="mt-8 text-lg opacity-90 max-w-2xl mx-auto">
            Our pilot program starts in urban markets across major cities. 
            Download the app and be among the first to ensure your family&apos;s safety.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="signup" className="py-20 bg-red-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8">Join thousands of consumers taking control of their food safety</p>
          
          <div className="max-w-lg mx-auto flex flex-col md:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-full text-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-white/50"
              placeholder="Enter your email address"
              onKeyPress={(e) => e.key === 'Enter' && handleEmailSubmit()}
            />
            <button
              onClick={handleEmailSubmit}
              className="bg-slate-800 hover:bg-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1"
            >
              {isSubmitted ? '✓ Submitted!' : 'Get Early Access'}
            </button>
          </div>
          
          <p className="mt-8 opacity-90">
            Be notified when the SafeOil app launches in your area. 
            Together, we can eliminate food fraud and protect public health.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg mb-3">
            © 2025 SafeOil - Smart Certification System. Protecting consumers through blockchain technology.
          </p>
          <p className="opacity-80">
            Contact: info@safeoil.vn | +84 123 456 789
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SafeOilLanding;