import React from 'react';
import { ScrollText, Gavel, Scale, AlertCircle, FileText } from 'lucide-react';

const TermsPage = () => {
  const sections = [
    { id: "acceptance", title: "Acceptance of Terms", icon: <ScrollText size={18} /> },
    { id: "user-accounts", title: "User Accounts", icon: <FileText size={18} /> },
    { id: "dropshipping", title: "Supplier & Logistics", icon: <Scale size={18} /> },
    { id: "liability", title: "Limitation of Liability", icon: <AlertCircle size={18} /> },
  ];

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans text-[#1a1a1a]">
      {/* Hero Header */}
      <header className="bg-white border-b border-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4 uppercase">Terms of Service</h1>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em]">
            Effective Date: April 11, 2026
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-[280px_1fr] gap-16">
        
        {/* Sticky Navigation Sidebar */}
        <aside className="hidden lg:block sticky top-10 h-fit">
          <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
            <nav className="space-y-1">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all group"
                >
                  <span className="text-gray-300 group-hover:text-indigo-400 transition-colors">
                    {section.icon}
                  </span>
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content Section */}
        <main className="space-y-20">
          
          <section id="acceptance" className="scroll-mt-10">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 ">
              01. Acceptance of Terms
            </h2>
            <div className="prose prose-gray text-gray-600 leading-relaxed space-y-4">
              <p>
                By accessing or using the Vastra Culture platform, you agree to be bound by these Terms of Service. If you do not agree to all terms, you may not access the services.
              </p>
              <p className="bg-gray-50 p-6 rounded-2xl border-l-4 border-indigo-600 italic text-sm">
                "Our platform operates as a bridge between verified suppliers and independent sellers. Your use of the platform signifies your understanding of this tripartite relationship."
              </p>
            </div>
          </section>

          <section id="user-accounts" className="scroll-mt-10">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 ">
              02. User Accounts & Security
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="p-6 border border-gray-100 rounded-2xl bg-white shadow-sm">
                <h4 className="font-bold mb-2">Account Responsibility</h4>
                <p className="text-gray-500">You are responsible for safeguarding your password and for all activities that occur under your account.</p>
              </div>
              <div className="p-6 border border-gray-100 rounded-2xl bg-white shadow-sm">
                <h4 className="font-bold mb-2">Accuracy of Info</h4>
                <p className="text-gray-500">Suppliers must provide accurate factory and tax information to maintain verified status.</p>
              </div>
            </div>
          </section>

          <section id="dropshipping" className="scroll-mt-10">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 ">
              03. Supplier & Logistics Standards
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Vastra Culture enforces strict quality checks. Suppliers who fail to meet the <strong>"Vastra Verified"</strong> threshold for three consecutive orders may face temporary portal suspension.
            </p>
            <ul className="space-y-4">
              {[
                "Orders must be dispatched within 48 hours of confirmation.",
                "Packaging must remain neutral or use Vastra Culture branding.",
                "Suppliers are responsible for initial quality verification."
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-sm font-medium">
                  <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-[10px]">
                    ✓
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section id="liability" className="scroll-mt-10">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              04. Limitation of Liability
            </h2>
            <div className="bg-[#1a1a1a] text-white p-8 rounded-3xl relative overflow-hidden">
              <p className="text-gray-400 text-sm leading-relaxed relative z-10 uppercase tracking-wide">
                To the maximum extent permitted by law, Vastra Culture shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use the platform services.
              </p>
              <Gavel className="absolute -right-6 -bottom-6 text-white/5" size={120} />
            </div>
          </section>

          {/* Footer of Content */}
          <footer className="pt-12 border-t border-gray-100 flex flex-col items-center">
            <p className="text-gray-400 text-xs mb-6">Questions about our terms?</p>
            <button className="bg-gray-800 text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-black-900 transition-all active:scale-95 shadow-xl shadow-gray-200">
              Contact Legal Team
            </button>
          </footer>

        </main>
      </div>
    </div>
  );
};

export default TermsPage;