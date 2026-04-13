'use client';
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  Truck, 
  Settings, 
  Bell, 
  Search,
  LogOut,
  Menu,
  X
} from 'lucide-react';

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={18} />, active: true },
    { name: "Products", icon: <Package size={18} />, active: false },
    { name: "Suppliers", icon: <Truck size={18} />, active: false },
    { name: "Customers", icon: <Users size={18} />, active: false },
    { name: "Settings", icon: <Settings size={18} />, active: false },
  ];

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans text-black flex">
      
      {/* 1. SIDEBAR: Fixed and Minimalist */}
      <aside className={`bg-white border-r border-black/5 transition-all duration-300 flex flex-col ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="p-8 border-b border-black/5">
          <h2 className={`font-bold tracking-[0.3em] uppercase transition-opacity ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>
            Vastra <span className="text-indigo-600">Admin</span>
          </h2>
        </div>

        <nav className="flex-1 p-4 space-y-2 mt-4">
          {menuItems.map((item) => (
            <button 
              key={item.name}
              className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-lg transition-all ${
                item.active 
                ? 'bg-black text-white shadow-lg shadow-black/5 font-medium' 
                : 'text-gray-400 hover:text-black hover:bg-gray-50'
              }`}
            >
              <div className="shrink-0">{item.icon}</div>
              <span className={`text-xs uppercase tracking-widest ${isSidebarOpen ? 'block' : 'hidden'}`}>
                {item.name}
              </span>
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-black/5">
          <button className="flex items-center gap-4 text-gray-400 hover:text-red-600 transition-colors px-4 py-2">
            <LogOut size={18} />
            <span className={`text-[10px] font-bold uppercase tracking-widest ${isSidebarOpen ? 'block' : 'hidden'}`}>
              Sign Out
            </span>
          </button>
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col">
        
        {/* TOP BAR: Search & User Controls */}
        <header className="h-20 bg-white border-b border-black/5 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center gap-6">
            <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-gray-400 hover:text-black transition-colors">
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="relative hidden md:block">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
              <input 
                type="text" 
                placeholder="SEARCH DATABASE..."
                className="pl-10 pr-4 py-2 text-[10px] uppercase tracking-widest border border-black/5 rounded-full outline-none focus:border-black transition-all w-64 bg-gray-50/50"
              />
            </div>
          </div>

          <div className="flex items-center gap-8">
            <button className="relative text-gray-400 hover:text-black transition-colors">
              <Bell size={18} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-600 rounded-full border-2 border-white" />
            </button>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-[10px] font-bold uppercase tracking-tight leading-none">Admin Lucknow</p>
                <p className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">Manager</p>
              </div>
              <div className="w-10 h-10 bg-gray-100 border border-black/5 rounded-full flex items-center justify-center text-xs font-bold">
                AD
              </div>
            </div>
          </div>
        </header>

        {/* WORKSPACE: Where children pages are rendered */}
        <main className="p-8">
          {/* Dashboard Sample Content (Placeholder) */}
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter uppercase">Overview</h1>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Status of Vastra Culture Ecosystem</p>
              </div>
              <button className="text-[10px] font-bold uppercase tracking-widest bg-black text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition-all">
                Download Report (₹)
              </button>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Total Revenue", val: "₹1,42,800", change: "+12%" },
                { label: "Active Suppliers", val: "482", change: "+2" },
                { label: "Pending Orders", val: "124", change: "-5" },
                { label: "Support Tickets", val: "12", change: "Stable" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white p-6 border border-black/5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{stat.label}</p>
                  <p className="text-xl font-bold">{stat.val}</p>
                  <p className="text-[9px] font-bold text-green-600 uppercase tracking-widest mt-2">{stat.change}</p>
                </div>
              ))}
            </div>

            {/* Content Slot */}
            <div className="mt-12">
              {children || (
                <div className="h-96 border border-dashed border-black/10 rounded-2xl flex items-center justify-center text-[10px] text-gray-300 uppercase tracking-[0.3em]">
                  Workspace Area
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;