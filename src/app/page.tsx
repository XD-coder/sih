import React from 'react';
import Image from 'next/image';

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
      <a href="#main-content" className="sr-only focus:not-sr-only bg-blue-600 text-white px-4 py-2 rounded absolute top-2 left-2 z-50">Skip to main content</a>
      <div className="bg-gray-50 font-sans text-gray-900 leading-normal tracking-wide">
      {/* Hero Section */}
  <section className="relative overflow-hidden bg-white py-12 md:py-24 text-center" id="main-content" role="main">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-12">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 leading-tight mb-4">
                Smart Tourist Safety, Anytime, Anywhere.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                An AI, Blockchain & IoT powered solution for real-time tourist protection.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                <a href="#" className="inline-block px-8 py-3 bg-blue-600 text-white text-lg font-bold rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                  Download App
                </a>
                <a href="#" className="inline-block px-8 py-3 bg-white text-blue-600 text-lg font-bold rounded-full border-2 border-blue-600 shadow-md hover:bg-gray-100 transition duration-300 transform hover:scale-105">
                  See How It Works
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://placehold.co/600x400/2563EB/FFFFFF?text=Travelers+with+Smart+ID"
                alt="Illustration of travelers with a smart ID and SOS button"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl shadow-2xl"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
  <section className="py-16 md:py-24 bg-blue-50 text-center" aria-labelledby="problem-statement-heading">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 id="problem-statement-heading" className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6">
              The Challenge for Today&apos;s Travelers
            </h2>
            <p className="text-lg text-gray-700 mb-12">
              &quot;Every year, thousands of tourists face emergencies due to a lack of quick help, missing companions, or lost identification. Our system solves these problems with cutting-edge technology.&quot;
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-center text-center">
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-500">
                <Image src="https://placehold.co/100x100/F87171/FFFFFF?text=Lost+ID" alt="Lost ID icon" className="mx-auto mb-4" width={100} height={100} unoptimized />
                <h3 className="text-xl font-bold text-gray-800">Lost ID</h3>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-yellow-500">
                <Image src="https://placehold.co/100x100/FACC15/FFFFFF?text=No+Network" alt="Network dead zones icon" className="mx-auto mb-4" width={100} height={100} unoptimized />
                <h3 className="text-xl font-bold text-gray-800">No Network</h3>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-teal-500">
                <Image src="https://placehold.co/100x100/14B8A6/FFFFFF?text=Health+Emergency" alt="Health emergency icon" className="mx-auto mb-4" width={100} height={100} unoptimized />
                <h3 className="text-xl font-bold text-gray-800">Health Emergency</h3>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
                <Image src="https://placehold.co/100x100/3B82F6/FFFFFF?text=Delayed+Help" alt="Late emergency response icon" className="mx-auto mb-4" width={100} height={100} unoptimized />
                <h3 className="text-xl font-bold text-gray-800">Delayed Help</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
  <section className="py-16 md:py-24 bg-white" aria-labelledby="features-heading">
        <div className="container mx-auto px-6">
          <h2 id="features-heading" className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-16">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 text-white p-8 rounded-2xl shadow-xl transition-transform transform hover:scale-105"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-2">
                  {feature.title}
                </h3>
                <p className="text-center text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
  <section className="py-16 md:py-24 bg-blue-50" aria-labelledby="how-it-works-heading">
        <div className="container mx-auto px-6">
          <h2 id="how-it-works-heading" className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-16">
            How It Works
          </h2>
          <div className="flex flex-col space-y-16">
            {howItWorks.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center space-y-8 md:space-y-0 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-1/2 flex justify-center">
                  <Image
                    src={`https://placehold.co/500x300/60A5FA/FFFFFF?text=${encodeURIComponent(step.title)}`}
                    alt={step.title}
                    width={500}
                    height={300}
                    className="rounded-xl shadow-2xl"
                    unoptimized
                  />
                </div>
                <div className="md:w-1/2 md:p-8 text-center md:text-left">
                  <span className="text-blue-600 font-bold text-lg mb-2 inline-block">
                    {step.step}
                  </span>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{step.title}</h3>
                  <p className="text-lg text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
  <section className="py-16 md:py-24 bg-white" aria-labelledby="benefits-heading">
        <div className="container mx-auto px-6">
          <h2 id="benefits-heading" className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-16">
            Who Benefits?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-100 p-8 rounded-2xl shadow-lg border-t-4 border-blue-600 flex flex-col items-center text-center transition-transform transform hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
  <section className="py-16 md:py-24 bg-blue-900 text-white" aria-labelledby="impact-heading">
        <div className="container mx-auto px-6 text-center">
          <h2 id="impact-heading" className="text-4xl md:text-5xl font-extrabold mb-12">
            Our Projected Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <p className="text-6xl md:text-8xl font-black mb-4 text-blue-400">90%</p>
              <p className="text-2xl font-bold mb-8">Reduction in missing tourist incidents</p>
              <p className="text-6xl md:text-8xl font-black mb-4 text-blue-400">2x</p>
              <p className="text-2xl font-bold">Faster emergency response</p>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://placehold.co/400x400/1E3A8A/FFFFFF?text=Infographic"
                alt="Infographic showing social, economic, environmental, and convenience benefits"
                width={400}
                height={400}
                className="w-full h-auto rounded-xl shadow-2xl"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
  <section className="py-16 md:py-24 bg-gray-50" aria-labelledby="testimonials-heading">
        <div className="container mx-auto px-6">
          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-xl italic text-gray-700 mb-4">
                &quot;Even without network, my SOS reached the nearest help center. This app is a lifesaver for adventurers!&quot;
              </p>
              <p className="text-lg font-bold text-gray-800">- Jane Doe, Trekker</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-xl italic text-gray-700 mb-4">
                &quot;We knew exactly where our daughter was during her trip, and that gave us complete peace of mind. Highly recommend!&quot;
              </p>
              <p className="text-lg font-bold text-gray-800">- The Smith Family</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
  <section className="py-16 md:py-24 bg-blue-600 text-white text-center" aria-labelledby="cta-heading">
        <div className="container mx-auto px-6">
          <h2 id="cta-heading" className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Don&apos;t just travel, travel safe.
          </h2>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <a href="#" className="inline-block px-8 py-4 bg-white text-blue-600 text-xl font-bold rounded-full shadow-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105">
              Download Now
            </a>
            <a href="#" className="inline-block px-8 py-4 bg-transparent text-white text-xl font-bold rounded-full border-2 border-white hover:bg-white hover:text-blue-600 transition duration-300 transform hover:scale-105">
              Join as Authority / Guide
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
  <footer className="bg-gray-900 text-white py-12" role="contentinfo">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-400 transition-colors">
                About
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Contact
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Support
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook hover:text-blue-400 transition-colors"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter hover:text-blue-400 transition-colors"><path d="M22 4s-.7 2.1-2 3.4c.6.9 1.4 1.9 2 2.5-2.2 2.9-4.9 5.3-8.3 5.5-5.5.3-10-4.2-10-9.5 0-1.8.8-3.5 2-4.9-3.7 1.2-5.7 5.1-5.7 9.5 0 8 7.3 14.5 16 14.5 8.7 0 16-6.5 16-14.5 0-1.8-.8-3.5-2-4.9z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin hover:text-blue-400 transition-colors"><path d="M16 8h-2a2 2 0 0 0-2 2v6h-4V10a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10h4v-7a2 2 0 0 1 2-2h2v9a2 2 0 0 1-2 2h-2zm12-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2h2a2 2 0 0 0 2-2v-2zM4 4h-2a2 2 0 0 0-2 2v10h2v-7a2 2 0 0 1 2-2h2v9a2 2 0 0 1-2 2h-2zm12-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2h2a2 2 0 0 0 2-2v-2z"/></svg>
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-4 sm:mt-0">© 2025 SIH Branding</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
};

export default App;
