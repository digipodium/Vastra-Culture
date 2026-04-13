import React from 'react';
import { ShieldCheck, Lock, Eye, RefreshCw, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  const lastUpdated = "April 11, 2026";

  const sections = [
    { id: "collection", title: "Information We Collect", icon: <Eye size={18} /> },
    { id: "usage", title: "How We Use Data", icon: <RefreshCw size={18} /> },
    { id: "security", title: "Data Security", icon: <Lock size={18} /> },
    { id: "sharing", title: "Third-Party Sharing", icon: <ShieldCheck size={18} /> },
  ];

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans text-[#1a1a1a]">
      {/* Header Section */}
      <header className="bg-white border-b border-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-gray-500 text-sm uppercase tracking-widest font-medium">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-[250px_1fr] gap-12">
        
        {/* Sidebar Navigation (Sticky) */}
        <aside className="hidden lg:block sticky top-8 h-fit">
          <nav className="space-y-1">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all"
              >
                {section.icon}
                {section.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <main className="bg-white rounded-3xl border border-gray-100 p-8 md:p-12 shadow-sm">
          <div className="prose prose-gray max-w-none">
            
            <section id="collection" className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center text-sm">01</span>
                Information We Collect
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you visit Vastra Culture, we collect information necessary to process your orders and enhance your shopping experience. This includes:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                <li className="bg-gray-50 p-4 rounded-xl">**Identity Data:** Name, username, and shipping addresses.</li>
                <li className="bg-gray-50 p-4 rounded-xl">**Contact Data:** Email address and telephone numbers.</li>
                <li className="bg-gray-50 p-4 rounded-xl">**Technical Data:** IP address, browser type, and location.</li>
                <li className="bg-gray-50 p-4 rounded-xl">**Transaction Data:** Details about payments and products purchased.</li>
              </ul>
            </section>

            <section id="usage" className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center text-sm">02</span>
                How We Use Data
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We use your data to manage your account, process logistics (specifically for our dropshipping model), and provide real-time updates on your delivery status. We do not sell your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section id="security" className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center text-sm">03</span>
                Data Security
              </h2>
              <div className="bg-indigo-900 text-white p-8 rounded-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-indigo-200 text-sm font-medium mb-2">Industry Standard Protection</p>
                  <p className="leading-relaxed">
                    All transaction data is encrypted using SSL (Secure Socket Layer) technology. We implement strict internal access controls to ensure your personal data is only accessible to employees on a need-to-know basis.
                  </p>
                </div>
                <ShieldCheck className="absolute -right-8 -bottom-8 text-white/10" size={180} />
              </div>
            </section>

            <section id="sharing" className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center text-sm">04</span>
                Third-Party Sharing
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To fulfill our service, we share necessary data with:
              </p>
              <div className="mt-6 border border-gray-100 rounded-xl overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 font-bold uppercase tracking-wider text-[10px] text-gray-400">Partner Type</th>
                      <th className="px-6 py-4 font-bold uppercase tracking-wider text-[10px] text-gray-400">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-6 py-4 font-medium">Logistics Partners</td>
                      <td className="px-6 py-4 text-gray-500">Shipping and order delivery.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Payment Gateways</td>
                      <td className="px-6 py-4 text-gray-500">Secure transaction processing.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Suppliers</td>
                      <td className="px-6 py-4 text-gray-500">Direct fulfillment of products.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Contact Footer */}
            <div className="mt-20 p-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                <h4 className="font-bold text-lg">Still have questions?</h4>
                <p className="text-gray-500 text-sm">Our privacy team is here to help.</p>
              </div>
              <button className="flex items-center gap-2 bg-[#1a1a1a] text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all text-sm font-semibold">
                <Mail size={16} />
                Contact Privacy Office
              </button>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default PrivacyPolicy;