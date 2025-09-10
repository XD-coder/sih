import React from 'react';
import Script from 'next/script';
import HeroSection from '../components/HeroSection';
import ProblemStatementSection from '../components/ProblemStatementSection';
import FeaturesSection from '../components/FeaturesSection';
import BenefitsSection from '../components/BenefitsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import ImpactSection from '../components/ImpactSection';
import TestimonialsSection from '../components/TestimonialsSection';
import TeamSection from '../components/TeamSection';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

// Type definitions for data
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
  visual: string;
}

// Reusable icons as React components with typed props
const QrCodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-qr-code">
    <rect width="5" height="5" x="3" y="3" rx="1" />
    <rect width="5" height="5" x="16" y="3" rx="1" />
    <rect width="5" height="5" x="3" y="16" rx="1" />
    <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
    <path d="M21 21v0" />
    <path d="M12 7v5" />
    <path d="M15 7v5" />
    <path d="M7 12h-2a2 2 0 0 0-2 2v2" />
    <path d="M12 15v-5" />
    <path d="M12 15h-3a2 2 0 0 0-2 2v2" />
  </svg>
);

const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const WatchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-watch">
    <circle cx="12" cy="12" r="6" />
    <polyline points="12 6 12 12 16 14" />
    <path d="M12 2a2 2 0 0 1 2 2v3.1a2 2 0 0 1-4 0V4a2 2 0 0 1 2-2Z" />
    <path d="M12 22a2 2 0 0 1-2-2v-3.1a2 2 0 0 1 4 0V20a2 2 0 0 1-2 2Z" />
  </svg>
);

const ScanIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scan-face">
    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    <path d="M8 10h.01" />
    <path d="M16 10h.01" />
    <path d="M12 15h.01" />
    <path d="M11 12.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.5z" />
  </svg>
);

const MicIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mic-vocal">
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" x2="12" y1="19" y2="22" />
  </svg>
);

const SignalIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-signal-off">
    <path d="M2 20h.01" />
    <path d="M7 20v-4" />
    <path d="M12 20v-8" />
    <path d="M17 20v-4" />
    <path d="M22 20v-8" />
    <path d="m17 12 5 8" />
  </svg>
);

const BatteryLowIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-battery-low">
    <path d="M16 10h2.5c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5H16" />
    <path d="M2 7h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" />
    <line x1="2" x2="16" y1="12" y2="12" />
  </svg>
);

const CaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase">
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const GlobeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

const UserCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-check">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M16 11l2 2 4-4" />
  </svg>
);

const BusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bus">
    <path d="M18 6H9a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z" />
    <path d="M15 6V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2" />
    <path d="M2 11h14" />
    <path d="M19 11h3" />
    <path d="M6 15h.01" />
    <path d="M18 15h.01" />
  </svg>
);

const HeartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

// Main App Component
const App: React.FC = () => {
  // Features data
  const features: Feature[] = [
    {
      icon: <QrCodeIcon className="text-white w-8 h-8 md:w-10 md:h-10" />,
      title: "Secure Digital ID (Blockchain & QR Enabled)",
      description: "Tamper-proof, verifiable ID for quick and secure identification.",
    },
    {
      icon: <UsersIcon className="text-white w-8 h-8 md:w-10 md:h-10" />,
      title: "Group Safety Alerts",
      description: "Automatically notify your group if someone goes missing or separates from the group.",
    },
    {
      icon: <WatchIcon className="text-white w-8 h-8 md:w-10 md:h-10" />,
      title: "Smartwatch Integration",
      description: "Track vitals and live location for constant well-being checks.",
    },
    {
      icon: <ScanIcon className="text-white w-8 h-8 md:w-10 md:h-10" />,
      title: "AI Image Verification",
      description: "AI confirms incident photos for credibility before escalating to authorities.",
    },
    {
      icon: <MicIcon className="text-white w-8 h-8 md:w-10 md:h-10" />,
      title: "Voice-Activated SOS",
      description: "Trigger an SOS alert hands-free with a simple voice command.",
    },
    {
      icon: <SignalIcon className="text-white w-8 h-8 md:w-10 md:h-10" />,
      title: "Offline Mode",
      description: "Cached maps, emergency tips, and smart routing work even without an internet connection.",
    },
    {
      icon: <BatteryLowIcon className="text-white w-8 h-8 md:w-10 md:h-10" />,
      title: "Battery Guard",
      description: "Sends automated alerts to your contacts if your phone battery drops to a critical level.",
    },
    {
      icon: <CaseIcon className="text-white w-8 h-8 md:w-10 md:h-10" />,
      title: "Trip Digital Safe",
      description: "Store essential documents like passports and bookings securely in the cloud.",
    },
  ];

  // Benefits data
  const benefits: Benefit[] = [
    {
      icon: <UserCheckIcon className="w-10 h-10 text-blue-500" />,
      title: "For Tourists",
      description: "Enjoy peace of mind, quick access to help, and offline navigation to explore freely.",
    },
    {
      icon: <HeartIcon className="w-10 h-10 text-red-500" />,
      title: "For Families",
      description: "Receive real-time updates and emergency alerts, knowing your loved ones are safe.",
    },
    {
      icon: <BusIcon className="w-10 h-10 text-green-500" />,
      title: "For Authorities",
      description: "Get faster verification of incidents and reduce emergency response time significantly.",
    },
    {
      icon: <GlobeIcon className="w-10 h-10 text-purple-500" />,
      title: "For Tourism Industry",
      description: "Build trust and establish destinations as safe and secure for all travelers.",
    },
  ];

  // How It Works data
  const howItWorks: HowItWorksStep[] = [
    {
      step: "Step 1",
      title: "Register with Digital ID",
      description: "Tourist registers on the app, and a unique, secure Digital ID with a QR code is generated.",
      visual: "tourist-register-qr.png"
    },
    {
      step: "Step 2",
      title: "Activate Safety Mode",
      description: "The tourist activates group travel or solo safety mode, sharing their location with designated contacts.",
      visual: "activate-safety-mode.png"
    },
    {
      step: "Step 3",
      title: "Emergency Alert",
      description: "In an emergency, an alert is triggered. The AI validates the report, and the alert is transmitted to authorities and family.",
      visual: "emergency-alert-flow.png"
    },
  ];

  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
      <a href="#main-content" className="sr-only focus:not-sr-only bg-blue-600 text-white px-4 py-2 rounded absolute top-2 left-2 z-50">Skip to main content</a>
      <div className="bg-gray-50 font-sans text-gray-900 leading-normal tracking-wide">
  <HeroSection />
  <ProblemStatementSection />
  <FeaturesSection features={features} />
  <HowItWorksSection steps={howItWorks} />
  <BenefitsSection benefits={benefits} />
  <ImpactSection />
  <TestimonialsSection />
  <TeamSection />
  <FAQSection />
  <CTASection />
  <Footer />
      </div>
    </>
  );
};

export default App;
