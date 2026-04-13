import React from 'react';
import { 
  Package, 
  MapPin, 
  Settings, 
  LogOut, 
  ChevronRight, 
  Clock, 
  CreditCard,
  User as UserIcon
} from 'lucide-react';

const UserDashboard = () => {
  // Mock data for recent orders
  const recentOrders = [
    { id: "VC-9921", status: "In Transit", date: "April 08, 2026", total: "₹1,299", img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=100" },
    { id: "VC-8840", status: "Delivered", date: "March 22, 2026", total: "₹2,499", img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=100" }
  ];

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans text-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[260px_1fr] gap-12">
          
          {/* SIDEBAR NAVIGATION */}
          <aside className="space-y-8">
            <div className="flex items-center gap-4 px-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                J
              </div>
              <div>
                <h2 className="text-sm font-bold uppercase tracking-tight">John Doe</h2>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Premium Member</p>
              </div>
            </div>

            <nav className="space-y-1">
              {[
                { name: "My Orders", icon: <Package size={18} />, active: true },
                { name: "Addresses", icon: <MapPin size={18} />, active: false },
                { name: "Payments", icon: <CreditCard size={18} />, active: false },
                { name: "Settings", icon: <Settings size={18} />, active: false },
              ].map((item) => (
                <button 
                  key={item.name}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-all ${
                    item.active 
                    ? 'bg-white shadow-sm border border-gray-100 text-indigo-600 font-bold' 
                    : 'text-gray-400 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3 text-sm">
                    {item.icon}
                    {item.name}
                  </div>
                  {item.active && <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />}
                </button>
              ))}
              <button className="w-full flex items-center gap-3 px-4 py-3.5 mt-8 text-sm font-medium text-red-400 hover:text-red-600 transition-colors">
                <LogOut size={18} />
                Sign Out
              </button>
            </nav>
          </aside>

          {/* MAIN CONTENT AREA */}
          <main className="space-y-10">
            
            {/* Header: Welcome & Stats */}
            <header className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-3 mb-4">
                <h1 className="text-3xl font-bold tracking-tighter uppercase">My Dashboard</h1>
                <p className="text-gray-400 text-sm mt-1 italic">Welcome back! You have one shipment arriving today.</p>
              </div>
              
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Ongoing Orders</p>
                  <p className="text-xl font-bold">01</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
                  <Package size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total Orders</p>
                  <p className="text-xl font-bold">12</p>
                </div>
              </div>
            </header>

            {/* Recent Orders Section */}
            <section className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-8 flex justify-between items-center border-b border-gray-50">
                <h3 className="text-sm font-bold uppercase tracking-widest">Recent Activity</h3>
                <button className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest hover:underline">View All</button>
              </div>
              
              <div className="divide-y divide-gray-50">
                {recentOrders.map((order) => (
                  <div key={order.id} className="p-6 flex items-center justify-between hover:bg-gray-50/50 transition-colors group">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-20 bg-gray-50 rounded-xl overflow-hidden shadow-sm">
                        <img src={order.img} alt={order.id} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">{order.id}</p>
                        <h4 className="text-sm font-bold mb-1">Standard Shipment</h4>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock size={12} /> {order.date}
                          </span>
                          <span className="font-bold text-gray-900">{order.total}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                        order.status === 'In Transit' 
                        ? 'bg-indigo-50 text-indigo-600' 
                        : 'bg-green-50 text-green-600'
                      }`}>
                        {order.status}
                      </div>
                      <button className="p-2 text-gray-300 group-hover:text-gray-900 transition-colors">
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Profile Info Grid */}
            <section className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Default Shipping</h4>
                  <button className="text-[10px] font-bold text-indigo-600 uppercase">Edit</button>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-50 rounded-xl"><MapPin size={20} className="text-gray-400" /></div>
                  <div className="text-sm leading-relaxed text-gray-600">
                    <p className="font-bold text-gray-900">John Doe</p>
                    <p>Flat 402, Skyline Residency</p>
                    <p>Hazratganj, Lucknow, 226001</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Account Verification</h4>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-50 rounded-xl"><UserIcon size={20} className="text-green-600" /></div>
                    <div>
                      <p className="text-sm font-bold">Email Verified</p>
                      <p className="text-xs text-gray-500">Your account is fully secured.</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-[0.03] rotate-12">
                   <UserIcon size={120} />
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;