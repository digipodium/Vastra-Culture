'use client';
import React, { useState } from 'react';
import { CheckCircle, XCircle, Tag, Eye, Globe, Package } from 'lucide-react';

const AdminDashboard = () => {
  // Mock data representing products submitted by various suppliers
  const [pendingProducts, setPendingProducts] = useState([
    { id: 101, name: "Cotton Kurta", supplier: "credence", costPrice: 40, status: "Pending" },
    { id: 102, name: "Silk Scarf", supplier: "Heritage Weaves", costPrice: 15, status: "Pending" }
  ]);

  const [liveProducts, setLiveProducts] = useState([
    { id: 1, name: "Classic Denim", costPrice: 30, sellingPrice: 55, stock: 20, isLive: true }
  ]);

  // Logic to Approve and Set Admin Pricing
  const approveProduct = (product) => {
    const adminMargin = 1.5; // Example: Admin adds 50% markup
    const newLiveProduct = {
      ...product,
      sellingPrice: product.costPrice * adminMargin,
      isLive: false, // Not live until admin clicks "Publish"
      stock: 50 // Default stock or fetched from supplier
    };

    setLiveProducts([...liveProducts, newLiveProduct]);
    setPendingProducts(pendingProducts.filter(p => p.id !== product.id));
  };

  // Logic to update price manually
  const updatePrice = (id, newPrice) => {
    setLiveProducts(liveProducts.map(p => 
      p.id === id ? { ...p, sellingPrice: parseFloat(newPrice) } : p
    ));
  };

  // Toggle Website Visibility
  const toggleVisibility = (id) => {
    setLiveProducts(liveProducts.map(p => 
      p.id === id ? { ...p, isLive: !p.isLive } : p
    ));
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-slate-800 mb-8 flex pt-6 items-center gap-3">
          <Package className="text-indigo-600" /> Admin Control Center
        </h1>

        <div className="grid grid-cols-1 gap-10">
          
          {/* SECTION 1: APPROVAL QUEUE */}
          <section className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
            <div className="bg-amber-50 px-6 py-4 border-b border-amber-100">
              <h2 className="text-lg font-bold text-amber-800">New Supplier Submissions</h2>
              <p className="text-sm text-amber-600">Review and approve products for the marketplace.</p>
            </div>
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-slate-500 text-sm uppercase">
                <tr>
                  <th className="px-6 py-3">Product Name</th>
                  <th className="px-6 py-3">Supplier</th>
                  <th className="px-6 py-3">Supplier Cost</th>
                  <th className="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pendingProducts.map(p => (
                  <tr key={p.id} className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 font-medium">{p.name}</td>
                    <td className="px-6 py-4 text-slate-600">{p.supplier}</td>
                    <td className="px-6 py-4">${p.costPrice}</td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => approveProduct(p)}
                        className="bg-indigo-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-lg flex items-center gap-2 ml-auto text-sm"
                      >
                        <CheckCircle size={16}  /> Approve
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* SECTION 2: LIVE INVENTORY & PRICING */}
          <br/>
          <section className="bg-white rounded-xl shadow-md border border-slate-200  overflow-hidden">
            <div className="bg-indigo-50 px-6 py-4 border-b border-indigo-100">
              <h2 className="text-lg font-bold text-indigo-800">Live Inventory Management</h2>
              <p className="text-sm text-indigo-600">Adjust pricing and publish to the main website.</p>
            </div>
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-slate-500 text-sm uppercase">
                <tr>
                  <th className="px-6 py-3">Product</th>
                  <th className="px-6 py-3">Admin Price ($)</th>
                  <th className="px-6 py-3">Profit</th>
                  <th className="px-6 py-3">Website Status</th>
                  <th className="px-6 py-3 text-right">Listing Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {liveProducts.map(p => (
                  <tr key={p.id}>
                    <td className="px-6 py-4 font-semibold">{p.name}</td>
                    <td className="px-6 py-4">
                      <input 
                        type="number"
                        className="w-24 p-1 border border-slate-300 rounded focus:ring-2 focus:ring-indigo-400"
                        value={p.sellingPrice}
                        onChange={(e) => updatePrice(p.id, e.target.value)}
                      />
                    </td>
                    <td className="px-6 py-4 text-green-600 font-medium">
                      +${(p.sellingPrice - p.costPrice).toFixed(2)}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`flex items-center gap-1 text-xs font-bold uppercase ${p.isLive ? 'text-green-600' : 'text-slate-400'}`}>
                        {p.isLive ? <Globe size={14} /> : <Eye size={14} />}
                        {p.isLive ? 'Online' : 'Hidden'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => toggleVisibility(p.id)}
                        className={`px-4 py-2 rounded-md font-medium text-sm transition ${
                          p.isLive ? 'bg-red-50 text-red-600 hover:bg-red-100' : 'bg-indigo-600 text-white hover:bg-indigo-700'
                        }`}
                      >
                        {p.isLive ? 'Remove from Web' : 'Publish to Web'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;