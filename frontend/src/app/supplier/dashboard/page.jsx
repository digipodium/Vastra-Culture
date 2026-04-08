'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Link from 'next/link';
import {
  Package,
  PlusCircle,
  LayoutDashboard,
  Search,
  Trash2,
  Edit3,
  Eye,
  IndianRupee,
  Boxes,
  Star,
  TrendingUp,
  ShoppingBag,
  AlertTriangle,
  RefreshCw,
  Filter,
  MoreVertical,
  ImageIcon,
  Tag,
  ChevronDown,
  X,
} from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const SupplierDashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [deleteModalId, setDeleteModalId] = useState(null);
  const [viewProduct, setViewProduct] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}/product/getall`);
      setProducts(res.data);
    } catch (err) {
      console.error(err);
      toast.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/product/delete/${id}`);
      toast.success('Product deleted successfully');
      setProducts(prev => prev.filter(p => p._id !== id));
      setDeleteModalId(null);
    } catch (err) {
      console.error(err);
      toast.error('Failed to delete product');
    }
  };

  /* Derived data */
  const categories = ['All', ...new Set(products.map(p => p.category).filter(Boolean))];

  const filtered = products.filter(p => {
    const matchesSearch =
      p.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalStock = products.reduce((sum, p) => sum + (p.stock || 0), 0);
  const totalValue = products.reduce((sum, p) => sum + ((p.price || 0) * (p.stock || 0)), 0);
  const featuredCount = products.filter(p => p.isFeatured).length;
  const lowStockCount = products.filter(p => (p.stock || 0) <= 5).length;

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ──── HEADER ──── */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2.5 tracking-tight">
                <LayoutDashboard size={24} className="text-indigo-500" />
                Supplier Dashboard
              </h1>
              <p className="text-sm text-gray-400 mt-1">Manage your inventory & product listings</p>
            </div>
            <Link
              href="/supplier/add-product"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                boxShadow: '0 4px 14px rgba(99,102,241,0.25)',
              }}
            >
              <PlusCircle size={17} />
              Add Product
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-8">

        {/* ──── STATS CARDS ──── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Total Products */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between mb-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #eef2ff, #e0e7ff)' }}
              >
                <Package size={18} className="text-indigo-500" />
              </div>
              <span className="text-xs font-semibold text-indigo-500 bg-indigo-50 px-2.5 py-1 rounded-full">Total</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{products.length}</p>
            <p className="text-xs text-gray-400 mt-1">Products listed</p>
          </div>

          {/* Total Stock */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between mb-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)' }}
              >
                <Boxes size={18} className="text-emerald-500" />
              </div>
              <span className="text-xs font-semibold text-emerald-500 bg-emerald-50 px-2.5 py-1 rounded-full">Stock</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{totalStock.toLocaleString()}</p>
            <p className="text-xs text-gray-400 mt-1">Units in inventory</p>
          </div>

          {/* Inventory Value */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between mb-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #f5f3ff, #ede9fe)' }}
              >
                <IndianRupee size={18} className="text-violet-500" />
              </div>
              <span className="text-xs font-semibold text-violet-500 bg-violet-50 px-2.5 py-1 rounded-full">Value</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">₹{totalValue.toLocaleString()}</p>
            <p className="text-xs text-gray-400 mt-1">Inventory value</p>
          </div>

          {/* Low Stock Alert */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between mb-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: lowStockCount > 0 ? 'linear-gradient(135deg, #fef2f2, #fee2e2)' : 'linear-gradient(135deg, #fffbeb, #fef3c7)' }}
              >
                {lowStockCount > 0
                  ? <AlertTriangle size={18} className="text-red-500" />
                  : <Star size={18} className="text-amber-500" />
                }
              </div>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${lowStockCount > 0 ? 'text-red-500 bg-red-50' : 'text-amber-500 bg-amber-50'}`}>
                {lowStockCount > 0 ? 'Alert' : 'Featured'}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{lowStockCount > 0 ? lowStockCount : featuredCount}</p>
            <p className="text-xs text-gray-400 mt-1">{lowStockCount > 0 ? 'Low stock items' : 'Featured products'}</p>
          </div>
        </div>

        {/* ──── FILTERS & SEARCH ──── */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm mb-6">
          <div className="px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300" />
              <input
                type="text"
                placeholder="Search products by name or brand..."
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 transition-all duration-200 text-gray-900 placeholder:text-gray-300"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" />
              <select
                className="appearance-none pl-9 pr-10 py-2.5 text-sm rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 transition-all duration-200 text-gray-700 cursor-pointer"
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" />
            </div>

            {/* Refresh */}
            <button
              onClick={fetchProducts}
              className="p-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-400 hover:text-indigo-500 hover:border-indigo-200 hover:bg-indigo-50 transition-all duration-200 cursor-pointer"
              title="Refresh"
            >
              <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
            </button>
          </div>
        </div>

        {/* ──── PRODUCTS LIST ──── */}
        <section className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          {/* Section header */}
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag size={16} className="text-gray-400" />
              <h2 className="text-sm font-bold text-gray-900">Product Listings</h2>
              <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full font-medium">
                {filtered.length} {filtered.length === 1 ? 'item' : 'items'}
              </span>
            </div>
          </div>

          {/* Loading state */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-20">
              <RefreshCw size={28} className="text-indigo-400 animate-spin mb-3" />
              <p className="text-sm text-gray-400">Loading products...</p>
            </div>
          )}

          {/* Empty state */}
          {!loading && filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: 'linear-gradient(135deg, #eef2ff, #e0e7ff)' }}
              >
                <Package size={28} className="text-indigo-400" />
              </div>
              <p className="text-base font-semibold text-gray-700 mb-1">No products found</p>
              <p className="text-sm text-gray-400 mb-5">
                {searchQuery || selectedCategory !== 'All'
                  ? 'Try adjusting your search or filters'
                  : 'Start by adding your first product'}
              </p>
              {!searchQuery && selectedCategory === 'All' && (
                <Link
                  href="/supplier/add-product"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                    boxShadow: '0 4px 14px rgba(99,102,241,0.25)',
                  }}
                >
                  <PlusCircle size={16} />
                  Add Your First Product
                </Link>
              )}
            </div>
          )}

          {/* Product cards grid */}
          {!loading && filtered.length > 0 && (
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map(product => (
                <div
                  key={product._id}
                  className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                    {product.images && product.images.length > 0 ? (
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ display: product.images && product.images.length > 0 ? 'none' : 'flex' }}
                    >
                      <ImageIcon size={32} className="text-gray-300" />
                    </div>

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {product.isFeatured && (
                        <span className="px-2 py-0.5 rounded-md bg-amber-400 text-white text-[10px] font-bold uppercase tracking-wide flex items-center gap-1">
                          <Star size={9} /> Featured
                        </span>
                      )}
                      {product.discount > 0 && (
                        <span className="px-2 py-0.5 rounded-md bg-red-500 text-white text-[10px] font-bold">
                          -{product.discount}%
                        </span>
                      )}
                    </div>

                    {/* Quick actions overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                      <button
                        onClick={() => setViewProduct(product)}
                        className="w-9 h-9 rounded-lg bg-white/90 flex items-center justify-center text-gray-700 hover:bg-white transition-colors cursor-pointer"
                        title="View"
                      >
                        <Eye size={15} />
                      </button>
                      <button
                        onClick={() => setDeleteModalId(product._id)}
                        className="w-9 h-9 rounded-lg bg-white/90 flex items-center justify-center text-red-500 hover:bg-white transition-colors cursor-pointer"
                        title="Delete"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    {/* Category tag */}
                    {product.category && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-md uppercase tracking-wide mb-2">
                        <Tag size={9} /> {product.category}
                      </span>
                    )}

                    <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-1">{product.name}</h3>

                    {product.brand && (
                      <p className="text-xs text-gray-400 mb-3">by {product.brand}</p>
                    )}

                    {/* Price & Stock row */}
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-lg font-bold text-gray-900">
                            ₹{product.discount > 0
                              ? (product.price - (product.price * product.discount) / 100).toFixed(0)
                              : product.price?.toLocaleString()
                            }
                          </span>
                          {product.discount > 0 && (
                            <span className="text-xs text-gray-400 line-through">
                              ₹{product.price?.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded-md ${
                            product.stock <= 0
                              ? 'text-red-600 bg-red-50'
                              : product.stock <= 5
                              ? 'text-amber-600 bg-amber-50'
                              : 'text-emerald-600 bg-emerald-50'
                          }`}
                        >
                          {product.stock <= 0 ? 'Out of stock' : `${product.stock} in stock`}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* ──── DELETE CONFIRMATION MODAL ──── */}
      {deleteModalId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-7 relative">
            <button
              onClick={() => setDeleteModalId(null)}
              className="absolute top-4 right-4 text-gray-300 hover:text-gray-500 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
            <div className="flex flex-col items-center text-center">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: 'linear-gradient(135deg, #fef2f2, #fee2e2)' }}
              >
                <Trash2 size={24} className="text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Delete Product?</h3>
              <p className="text-sm text-gray-400 mb-6">This action cannot be undone. The product will be permanently removed.</p>
              <div className="flex gap-3 w-full">
                <button
                  onClick={() => setDeleteModalId(null)}
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(deleteModalId)}
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ──── VIEW PRODUCT MODAL ──── */}
      {viewProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}
          onClick={() => setViewProduct(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto relative"
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setViewProduct(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-lg bg-white/80 border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>

            {/* Modal Image */}
            <div className="w-full h-56 bg-gray-100 relative overflow-hidden rounded-t-2xl">
              {viewProduct.images && viewProduct.images.length > 0 ? (
                <img src={viewProduct.images[0]} alt={viewProduct.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <ImageIcon size={40} className="text-gray-300" />
                </div>
              )}
              {/* Badges */}
              <div className="absolute top-3 left-3 flex gap-1.5">
                {viewProduct.isFeatured && (
                  <span className="px-2.5 py-1 rounded-lg bg-amber-400 text-white text-xs font-bold flex items-center gap-1">
                    <Star size={11} /> Featured
                  </span>
                )}
                {viewProduct.discount > 0 && (
                  <span className="px-2.5 py-1 rounded-lg bg-red-500 text-white text-xs font-bold">
                    -{viewProduct.discount}% OFF
                  </span>
                )}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-7">
              {viewProduct.category && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-500 bg-indigo-50 px-2.5 py-1 rounded-lg uppercase tracking-wide mb-3">
                  <Tag size={10} /> {viewProduct.category}
                </span>
              )}

              <h2 className="text-xl font-bold text-gray-900 mb-1">{viewProduct.name}</h2>
              {viewProduct.brand && (
                <p className="text-sm text-gray-400 mb-4">by {viewProduct.brand}</p>
              )}

              {viewProduct.description && (
                <p className="text-sm text-gray-500 leading-relaxed mb-5 pb-5 border-b border-gray-100">
                  {viewProduct.description}
                </p>
              )}

              {/* Details grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">Price</p>
                  <p className="text-lg font-bold text-gray-900 flex items-baseline gap-1.5">
                    ₹{viewProduct.discount > 0
                      ? (viewProduct.price - (viewProduct.price * viewProduct.discount) / 100).toFixed(0)
                      : viewProduct.price?.toLocaleString()
                    }
                    {viewProduct.discount > 0 && (
                      <span className="text-xs text-gray-400 line-through font-normal">₹{viewProduct.price?.toLocaleString()}</span>
                    )}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">Stock</p>
                  <p className={`text-lg font-bold ${viewProduct.stock <= 0 ? 'text-red-500' : viewProduct.stock <= 5 ? 'text-amber-500' : 'text-gray-900'}`}>
                    {viewProduct.stock} units
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">Discount</p>
                  <p className="text-lg font-bold text-gray-900">{viewProduct.discount || 0}%</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">Rating</p>
                  <p className="text-lg font-bold text-gray-900 flex items-center gap-1">
                    {viewProduct.rating || 0} <Star size={14} className="text-amber-400" />
                  </p>
                </div>
              </div>

              {/* Multiple images */}
              {viewProduct.images && viewProduct.images.length > 1 && (
                <div className="mt-5">
                  <p className="text-xs font-semibold text-gray-500 mb-2.5 uppercase tracking-wide">All Images</p>
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {viewProduct.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${viewProduct.name} ${idx + 1}`}
                        className="w-16 h-16 rounded-lg object-cover border border-gray-200 flex-shrink-0"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupplierDashboard;