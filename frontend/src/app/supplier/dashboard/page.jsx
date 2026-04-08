'use client';
import React, { useState } from 'react';
import { Package, PlusCircle, LayoutDashboard, List } from 'lucide-react';

const SupplierDashboard = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Organic Coffee Beans", price: 25.00, stock: 120, status: "Approved" },
    { id: 2, name: "Eco-Friendly Filter", price: 12.50, stock: 45, status: "Pending" }
  ]);

  const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '' });

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) return;

    const productEntry = {
      ...newProduct,
      id: Date.now(),
      status: "Pending" // Automatically sent to Admin for review
    };

    setProducts([...products, productEntry]);
    setNewProduct({ name: '', price: '', stock: '' });
    alert("Product submitted for Admin approval!");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Supplier Portal</h1>
          <p className="text-gray-600">Manage your inventory and list new items.</p>
        </div>
        <div className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Package size={20} />
          <span>Total Products: {products.length}</span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Section: Add New Product */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-2 mb-6 border-b pb-2">
            <PlusCircle className="text-blue-500" />
            <h2 className="text-xl font-semibold">List New Product</h2>
          </div>
          
          <form onSubmit={handleAddProduct} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Product Name</label>
              <input 
                type="text"
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                value={newProduct.name}
                onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                placeholder="e.g. Wireless Mouse"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Price ($)</label>
                <input 
                  type="number"
                  className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                  placeholder="0.00"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Stock Quantity</label>
                <input 
                  type="number"
                  className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                  value={newProduct.stock}
                  onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
                  placeholder="0"
                  required
                />
              </div>
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition duration-200"
            >
              Submit to Admin
            </button>
          </form>
        </section>

        {/* List Section: Current Inventory */}
        <section className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-2 mb-6 border-b pb-2">
            <List className="text-green-500" />
            <h2 className="text-xl font-semibold">My Product Listings</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-100 text-gray-600 uppercase text-xs">
                  <th className="px-4 py-3">Product</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Stock</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 font-medium">{product.name}</td>
                    <td className="px-4 py-4">${Number(product.price).toFixed(2)}</td>
                    <td className="px-4 py-4">{product.stock} units</td>
                    <td className="px-4 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        product.status === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {product.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SupplierDashboard;