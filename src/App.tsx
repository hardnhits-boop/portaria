import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SevenRoles } from './components/SevenRoles';
import { InvestmentFuture } from './components/InvestmentFuture';
import { HowItWorks } from './components/HowItWorks';
import { SimpleSteps } from './components/SimpleSteps';
import { SalaryMarket } from './components/SalaryMarket';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { EnrollmentModal } from './components/EnrollmentModal';

export default function App() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);

  const scrollToPricing = () => {
    const element = document.getElementById('valores');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Plus_Jakarta_Sans'] selection:bg-amber-400 selection:text-slate-950">
      
      {/* Top Bar with Course Logo and "Quero saber mais" */}
      <Navbar onOpenEnrollment={() => setIsEnrollmentOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onScrollToPricing={scrollToPricing} />

        {/* 7 Functions Detail Section */}
        <SevenRoles />

        {/* Invest in Your Future Section with the 5 advantages & reception photos */}
        <InvestmentFuture />

        {/* How It Works & National LDB Certificate Section */}
        <HowItWorks />

        {/* Simple 4 Steps to Start Section */}
        <SimpleSteps onStartEnrollment={() => setIsEnrollmentOpen(true)} />

        {/* Market Salary Insights Section */}
        <SalaryMarket />

        {/* Pricing Section (Target for "Quero saber mais" - id="valores") */}
        <Pricing onOpenEnrollment={() => setIsEnrollmentOpen(true)} />

        {/* Student Testimonials Section */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQ />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Interactive Registration / Enrollment Modal */}
      <EnrollmentModal
        isOpen={isEnrollmentOpen}
        onClose={() => setIsEnrollmentOpen(false)}
      />
    </div>
  );
}
