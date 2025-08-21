import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Trust Your Cooking Oil – <span className="text-green-600">Verify in 2 Seconds</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Protect your family, business, and customers from food fraud with our blockchain-powered verification system.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="rounded-2xl shadow-lg">Download App Prototype</Button>
            <Button size="lg" variant="outline" className="rounded-2xl">Join Pilot Program</Button>
          </div>
        </div>
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img src="https://i.imgur.com/gfByu6E.png" alt="QR Verification Demo" className="w-80 rounded-2xl shadow-lg" />
        </motion.div> */}
      </section>

      {/* Problem Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">The Problem</h2>
          <p className="text-gray-600 text-lg">
            Tens of thousands of tons of unsafe oil have been sold as food. Consumers and businesses unknowingly use toxic oil, risking health and reputation.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Solution: Smart Certification</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 text-center">
              <Shield className="mx-auto mb-4 text-green-600" size={40} />
              <h3 className="font-semibold text-xl mb-2">Blockchain Traceability</h3>
              <p className="text-gray-600">Every oil batch recorded immutably – transparent and tamper-proof.</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 text-center">
              <CheckCircle className="mx-auto mb-4 text-green-600" size={40} />
              <h3 className="font-semibold text-xl mb-2">Instant Verification</h3>
              <p className="text-gray-600">Scan QR codes to confirm authenticity in real time.</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 text-center">
              <XCircle className="mx-auto mb-4 text-red-600" size={40} />
              <h3 className="font-semibold text-xl mb-2">Fraud Alerts</h3>
              <p className="text-gray-600">Detect and report counterfeit oil to regulators immediately.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Form */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Pilot Program</h2>
          <p className="mb-6 text-lg">Be part of the first group to test our Smart Certification System and help stop food fraud.</p>
          <form className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <Input placeholder="Your Name" className="rounded-xl" />
            <Input placeholder="Email Address" className="rounded-xl" />
            <Button className="rounded-xl bg-white text-green-700 hover:bg-gray-100">Sign Up</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        © 2025 Smart Certification System · Aligned with UN SDG 3 & 12
      </footer>
    </div>
  );
}
