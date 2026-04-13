import React from 'react';

const AboutPage = () => {
  // Mock data for team members
  const team = [
    { name: "Founder Name", role: "Product Strategy", image: "/api/placeholder/300/300" },
    { name: "Lead Developer", role: "Full Stack Engineer", image: "/api/placeholder/300/300" },
    { name: "Design Head", role: "Creative Director", image: "/api/placeholder/300/300" },
  ];

  return (
    <div className="bg-white text-[#1a1a1a] selection:bg-indigo-100">
      
      {/* 1. HERO SECTION: Quality Wears */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#f9f9f9]">
        <div className="container mx-auto px-6 text-center z-10">
          <span className="uppercase tracking-[0.3em] text-xs font-semibold text-indigo-600 mb-4 block">
            Established 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            QUALITY WEARS <br/> FOR THE GEN-Z ERA.
          </h1>
          <p className="max-w-xl mx-auto text-gray-500 text-lg leading-relaxed font-light">
            Merging premium craftsmanship with the vibrant energy of modern culture. 
            Vastra Culture isn't just a platform; it's a standard for textile excellence.
          </p>
        </div>
        {/* Subtle background element for depth */}
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50" />
      </section>

      {/* 2. CLOTHES QUALITY: Material & Detail */}
      <section className="py-24 px-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Uncompromising Fabric Integrity</h2>
            <p className="text-gray-600 leading-7">
              We believe quality is felt before it is seen. Every garment sourced through our 
              suppliers undergoes a multi-stage inspection. From GSM checks to color-fastness 
              tests, we ensure that "Vastra" stands for durability.
            </p>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3" />
                Sustainably sourced premium cotton blends
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3" />
                Reinforced stitching for longevity
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3" />
                Eco-friendly non-toxic dyes
              </li>
            </ul>
          </div>
          <div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
             <div className="w-full h-full flex items-center justify-center text-gray-400 italic">
               [Texture/Fabric Close-up Image]
             </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT INFORMATION: The Tech Side */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">The Product Ecosystem</h2>
            <p className="text-gray-400 max-w-lg">
              Our products are more than just inventory. They are data-driven style 
              selections optimized for the modern dropshipping landscape.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Smart Catalog", desc: "Real-time updates on trending silhouettes and Gen-Z aesthetics." },
              { title: "Supplier Ranking", desc: "Our internal algorithm ensures you only source from 5-star verified factories." },
              { title: "Live Tracking", desc: "Full transparency from the sewing machine to the customer's doorstep." }
            ].map((item, idx) => (
              <div key={idx} className="group cursor-default">
                <div className="text-indigo-400 text-xl font-mono mb-4">0{idx + 1}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR TEAM: Simple & Professional */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold tracking-tight mb-4">The Minds Behind Culture</h2>
          <div className="h-1 w-12 bg-indigo-600 mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative overflow-hidden rounded-xl bg-gray-50 aspect-square mb-6">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-gray-500 text-sm tracking-wide uppercase">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AboutPage;