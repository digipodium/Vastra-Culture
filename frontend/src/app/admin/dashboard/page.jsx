'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import {
  LayoutDashboard,
  Package,
  Clock,
  CheckCircle2,
  XCircle,
  Globe,
  Eye,
  EyeOff,
  IndianRupee,
  Search,
  RefreshCw,
  Filter,
  ChevronDown,
  X,
  Star,
  Tag,
  ImageIcon,
  TrendingUp,
  AlertTriangle,
  Boxes,
  Users,
  ShieldCheck,
  Ban,
  Send,
  Edit3,
  MoreVertical,
  ArrowUpRight,
  Sparkles,
  ShoppingBag,
} from 'lucide-react';
import FeedbackPopup from '@/components/FeedbackPopup';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const AdminDashboard = () => {
  /* ═══════ STATE ═══════ */
  const [products, setProducts] = useState([]);
  const [stats, setStats] = useState({ total: 0, pending: 0, approved: 0, rejected: 0, published: 0 });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('pending');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Modals
  const [rejectModal, setRejectModal] = useState(null);
  const [rejectReason, setRejectReason] = useState('');
  const [viewProduct, setViewProduct] = useState(null);
  const [editPriceId, setEditPriceId] = useState(null);
  const [editPriceValue, setEditPriceValue] = useState('');
  const [approveModal, setApproveModal] = useState(null);
  const [approvePrice, setApprovePrice] = useState('');

  /* ═══════ DATA FETCHING ═══════ */
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}/admin/products`);
      setProducts(res.data);
    } catch (err) {
      console.error(err);
      toast.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const res = await axios.get(`${API_URL}/admin/stats`);
      setStats(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchStats();
  }, []);

  /* ═══════ ACTIONS ═══════ */
  const handleApprove = async (product) => {
    try {
      const data = {};
      if (approvePrice && Number(approvePrice) > 0) {
        data.adminPrice = Number(approvePrice);
      }
      await axios.put(`${API_URL}/admin/products/approve/${product._id}`, data);
      toast.success(`"${product.name}" approved!`);
      setApproveModal(null);
      setApprovePrice('');
      fetchProducts();
      fetchStats();
    } catch (err) {
      console.error(err);
      toast.error('Failed to approve product');
    }
  };

  const handleReject = async () => {
    if (!rejectModal) return;
    try {
      await axios.put(`${API_URL}/admin/products/reject/${rejectModal._id}`, {
        rejectionReason: rejectReason || 'No reason provided',
      });
      toast.success(`"${rejectModal.name}" rejected`);
      setRejectModal(null);
      setRejectReason('');
      fetchProducts();
      fetchStats();
    } catch (err) {
      console.error(err);
      toast.error('Failed to reject product');
    }
  };

  const handleUpdatePrice = async (id) => {
    try {
      await axios.put(`${API_URL}/admin/products/update-price/${id}`, {
        adminPrice: Number(editPriceValue),
      });
      toast.success('Price updated');
      setEditPriceId(null);
      setEditPriceValue('');
      fetchProducts();
    } catch (err) {
      console.error(err);
      toast.error('Failed to update price');
    }
  };

  const handleTogglePublish = async (product) => {
    try {
      await axios.put(`${API_URL}/admin/products/publish/${product._id}`);
      toast.success(product.isPublished ? 'Removed from website' : 'Published to website!');
      fetchProducts();
      fetchStats();
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message || 'Failed to toggle publish');
    }
  };

  /* ═══════ DERIVED DATA ═══════ */
  const categories = ['All', ...new Set(products.map(p => p.category).filter(Boolean))];

  const filtered = products.filter(p => {
    const matchStatus =
      activeTab === 'all' ? true :
      activeTab === 'published' ? p.isPublished === true :
      p.status === activeTab;
    const matchSearch =
      !searchQuery ||
      p.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.supplierName?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory = selectedCategory === 'All' || p.category === selectedCategory;
    return matchStatus && matchSearch && matchCategory;
  });

  // Supplier activity — group products by supplier
  const supplierMap = {};
  products.forEach(p => {
    const key = p.supplierName || 'Unknown Supplier';
    if (!supplierMap[key]) {
      supplierMap[key] = { name: key, email: p.supplierEmail || '', count: 0, pending: 0, approved: 0, rejected: 0, lastDate: null };
    }
    supplierMap[key].count++;
    if (p.status === 'pending') supplierMap[key].pending++;
    if (p.status === 'approved') supplierMap[key].approved++;
    if (p.status === 'rejected') supplierMap[key].rejected++;
    const d = new Date(p.createdAt);
    if (!supplierMap[key].lastDate || d > supplierMap[key].lastDate) supplierMap[key].lastDate = d;
  });
  const suppliers = Object.values(supplierMap).sort((a, b) => (b.lastDate || 0) - (a.lastDate || 0));

  /* ═══════ TAB CONFIG ═══════ */
  const tabs = [
    { key: 'pending', label: 'Pending', icon: Clock, count: stats.pending, color: 'amber' },
    { key: 'approved', label: 'Approved', icon: CheckCircle2, count: stats.approved, color: 'emerald' },
    { key: 'rejected', label: 'Rejected', icon: XCircle, count: stats.rejected, color: 'red' },
    { key: 'published', label: 'Published', icon: Globe, count: stats.published, color: 'indigo' },
    { key: 'all', label: 'All', icon: Package, count: stats.total, color: 'gray' },
  ];

  const statusBadge = (product) => {
    const s = product.status || 'pending';
    const map = {
      pending: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200', label: 'Pending' },
      approved: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', label: product.isPublished ? 'Published' : 'Approved' },
      rejected: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200', label: 'Rejected' },
    };
    const cfg = map[s] || map.pending;
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide ${cfg.bg} ${cfg.text} border ${cfg.border}`}>
        {s === 'approved' && product.isPublished && <Globe size={9} />}
        {cfg.label}
      </span>
    );
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #eef2ff 50%, #f8fafc 100%)' }}>

      {/* ──── HEADER ──── */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-30 py-6">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className='px-6'>
              <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2.5 tracking-tight ">
                Admin Dashboard
              </h1>
              <p className="text-xs text-gray-400 mt-1 ml-40px">Manage supplier products, pricing & website visibility</p>
            </div>
            <button
              onClick={() => { fetchProducts(); fetchStats(); }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-600 bg-white border border-gray-200 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200 cursor-pointer"
            >
              <RefreshCw size={15} className={loading ? 'animate-spin' : ''} />
              Refresh
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-8">

        {/* ──── STATS CARDS ──── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {[
            { label: 'Total Products', value: stats.total, icon: Package, gradient: 'linear-gradient(135deg, #eef2ff, #e0e7ff)', iconColor: 'text-indigo-500', badge: 'Total', badgeColor: 'text-indigo-500 bg-indigo-50' },
            { label: 'Pending Review', value: stats.pending, icon: Clock, gradient: 'linear-gradient(135deg, #fffbeb, #fef3c7)', iconColor: 'text-amber-500', badge: 'Review', badgeColor: 'text-amber-500 bg-amber-50' },
            { label: 'Approved', value: stats.approved, icon: CheckCircle2, gradient: 'linear-gradient(135deg, #ecfdf5, #d1fae5)', iconColor: 'text-emerald-500', badge: 'Approved', badgeColor: 'text-emerald-500 bg-emerald-50' },
            { label: 'Rejected', value: stats.rejected, icon: XCircle, gradient: 'linear-gradient(135deg, #fef2f2, #fee2e2)', iconColor: 'text-red-500', badge: 'Rejected', badgeColor: 'text-red-500 bg-red-50' },
            { label: 'Published', value: stats.published, icon: Globe, gradient: 'linear-gradient(135deg, #f5f3ff, #ede9fe)', iconColor: 'text-violet-500', badge: 'Live', badgeColor: 'text-violet-500 bg-violet-50' },
          ].map((card, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: card.gradient }}>
                  <card.icon size={18} className={card.iconColor} />
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${card.badgeColor}`}>{card.badge}</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">{card.value}</p>
              <p className="text-xs text-gray-400 mt-1">{card.label}</p>
            </div>
          ))}
        </div>

        {/* ──── SUPPLIER ACTIVITY ──── */}
        <section className="bg-white rounded-2xl border border-gray-200 shadow-sm mb-8 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f5f3ff, #ede9fe)' }}>
              <Users size={15} className="text-violet-500" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-gray-900">Supplier Activity</h2>
              <p className="text-xs text-gray-400">Product submissions by supplier</p>
            </div>
          </div>

          {suppliers.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <p className="text-sm text-gray-400">No supplier activity yet</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="px-6 py-3.5 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Supplier</th>
                    <th className="px-6 py-3.5 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Products</th>
                    <th className="px-6 py-3.5 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Pending</th>
                    <th className="px-6 py-3.5 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Approved</th>
                    <th className="px-6 py-3.5 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Rejected</th>
                    <th className="px-6 py-3.5 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Last Submission</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {suppliers.map((s, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: `hsl(${(i * 67) % 360}, 55%, 55%)` }}>
                            {s.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900">{s.name}</p>
                            {s.email && <p className="text-xs text-gray-400">{s.email}</p>}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-bold text-gray-900">{s.count}</span>
                      </td>
                      <td className="px-6 py-4">
                        {s.pending > 0 ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-semibold text-amber-600 bg-amber-50">{s.pending}</span>
                        ) : <span className="text-xs text-gray-300">0</span>}
                      </td>
                      <td className="px-6 py-4">
                        {s.approved > 0 ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-semibold text-emerald-600 bg-emerald-50">{s.approved}</span>
                        ) : <span className="text-xs text-gray-300">0</span>}
                      </td>
                      <td className="px-6 py-4">
                        {s.rejected > 0 ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-semibold text-red-600 bg-red-50">{s.rejected}</span>
                        ) : <span className="text-xs text-gray-300">0</span>}
                      </td>
                      <td className="px-6 py-4 text-xs text-gray-400">
                        {s.lastDate ? s.lastDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* ──── TABS ──── */}
        <div className="flex items-center gap-1.5 mb-6 bg-white rounded-2xl border border-gray-200 p-1.5 shadow-sm overflow-x-auto">
          {tabs.map(tab => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-indigo-500 text-white shadow-md shadow-indigo-200'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                <tab.icon size={15} />
                {tab.label}
                <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                  isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ──── SEARCH & FILTER BAR ──── */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm mb-6">
          <div className="px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300" />
              <input
                type="text"
                placeholder="Search by product name, brand, or supplier..."
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 transition-all duration-200 text-gray-900 placeholder:text-gray-300"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
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
          </div>
        </div>

        {/* ──── PRODUCTS LIST ──── */}
        <section className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag size={16} className="text-gray-400" />
              <h2 className="text-sm font-bold text-gray-900">
                {activeTab === 'pending' ? 'Pending Approval' :
                 activeTab === 'approved' ? 'Approved Products' :
                 activeTab === 'rejected' ? 'Rejected Products' :
                 activeTab === 'published' ? 'Published Products' :
                 'All Products'}
              </h2>
              <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full font-medium">
                {filtered.length} {filtered.length === 1 ? 'item' : 'items'}
              </span>
            </div>
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-20">
              <RefreshCw size={28} className="text-indigo-400 animate-spin mb-3" />
              <p className="text-sm text-gray-400">Loading products...</p>
            </div>
          )}

          {/* Empty */}
          {!loading && filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: 'linear-gradient(135deg, #eef2ff, #e0e7ff)' }}
              >
                <Package size={28} className="text-indigo-400" />
              </div>
              <p className="text-base font-semibold text-gray-700 mb-1">No products found</p>
              <p className="text-sm text-gray-400">
                {searchQuery || selectedCategory !== 'All'
                  ? 'Try adjusting your search or filters'
                  : `No ${activeTab} products yet`}
              </p>
            </div>
          )}

          {/* Product cards */}
          {!loading && filtered.length > 0 && (
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map(product => (
                <div
                  key={product._id}
                  className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative w-full h-44 bg-gray-100 overflow-hidden">
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

                    {/* Status badge */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {statusBadge(product)}
                      {product.isFeatured && (
                        <span className="px-2 py-0.5 rounded-md bg-amber-400 text-white text-[10px] font-bold uppercase tracking-wide flex items-center gap-1">
                          <Star size={9} /> Featured
                        </span>
                      )}
                    </div>

                    {/* Quick view overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                      <button
                        onClick={() => setViewProduct(product)}
                        className="w-9 h-9 rounded-lg bg-white/90 flex items-center justify-center text-gray-700 hover:bg-white transition-colors cursor-pointer"
                        title="View Details"
                      >
                        <Eye size={15} />
                      </button>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    {product.category && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-md uppercase tracking-wide mb-2">
                        <Tag size={9} /> {product.category}
                      </span>
                    )}

                    <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-1">{product.name}</h3>

                    {product.supplierName && (
                      <p className="text-xs text-gray-400 mb-2">by {product.supplierName}</p>
                    )}
                    {product.brand && !product.supplierName && (
                      <p className="text-xs text-gray-400 mb-2">by {product.brand}</p>
                    )}

                    {/* Price display */}
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-lg font-bold text-gray-900">
                        ₹{product.adminPrice || product.price?.toLocaleString()}
                      </span>
                      {product.adminPrice && product.adminPrice !== product.price && (
                        <span className="text-xs text-gray-400 line-through">₹{product.price?.toLocaleString()}</span>
                      )}
                      {product.adminPrice && product.adminPrice > product.price && (
                        <span className="text-[10px] font-semibold text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded">
                          +₹{(product.adminPrice - product.price).toLocaleString()} margin
                        </span>
                      )}
                    </div>

                    {/* Rejection reason */}
                    {product.status === 'rejected' && product.rejectionReason && (
                      <div className="flex items-start gap-1.5 px-2.5 py-2 rounded-lg bg-red-50 border border-red-100 mb-3">
                        <AlertTriangle size={12} className="text-red-400 mt-0.5 shrink-0" />
                        <p className="text-xs text-red-600 line-clamp-2">{product.rejectionReason}</p>
                      </div>
                    )}

                    {/* Action buttons */}
                    <div className="flex gap-2 mt-auto">
                      {product.status === 'pending' && (
                        <>
                          <button
                            onClick={() => { setApproveModal(product); setApprovePrice(product.price?.toString() || ''); }}
                            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-white transition-all duration-200 cursor-pointer"
                            style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}
                          >
                            <CheckCircle2 size={13} /> Approve
                          </button>
                          <button
                            onClick={() => setRejectModal(product)}
                            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-red-600 bg-red-50 border border-red-100 hover:bg-red-100 transition-all duration-200 cursor-pointer"
                          >
                            <XCircle size={13} /> Reject
                          </button>
                        </>
                      )}

                      {product.status === 'approved' && (
                        <>
                          <button
                            onClick={() => { setEditPriceId(product._id); setEditPriceValue(product.adminPrice?.toString() || product.price?.toString() || ''); }}
                            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-gray-600 bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-all duration-200 cursor-pointer"
                          >
                            <Edit3 size={12} /> Edit Price
                          </button>
                          <button
                            onClick={() => handleTogglePublish(product)}
                            className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                              product.isPublished
                                ? 'text-red-600 bg-red-50 border border-red-100 hover:bg-red-100'
                                : 'text-white'
                            }`}
                            style={!product.isPublished ? { background: 'linear-gradient(135deg, #6366f1, #4f46e5)' } : {}}
                          >
                            {product.isPublished ? <><EyeOff size={12} /> Unpublish</> : <><Globe size={12} /> Publish</>}
                          </button>
                        </>
                      )}

                      {product.status === 'rejected' && (
                        <button
                          onClick={() => { setApproveModal(product); setApprovePrice(product.price?.toString() || ''); }}
                          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-white transition-all duration-200 cursor-pointer"
                          style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}
                        >
                          <CheckCircle2 size={13} /> Re-approve
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* ──── APPROVE MODAL ──── */}
      {approveModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(6px)' }}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-7 relative animate-in">
            <button
              onClick={() => { setApproveModal(null); setApprovePrice(''); }}
              className="absolute top-4 right-4 text-gray-300 hover:text-gray-500 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
            <div className="flex flex-col items-center text-center">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)' }}
              >
                <CheckCircle2 size={24} className="text-emerald-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Approve Product</h3>
              <p className="text-sm text-gray-400 mb-5">Set the selling price and approve "{approveModal.name}"</p>

              {/* Product preview */}
              <div className="w-full bg-gray-50 rounded-xl p-4 mb-5 text-left">
                <div className="flex items-center gap-3">
                  {approveModal.images && approveModal.images[0] ? (
                    <img src={approveModal.images[0]} alt="" className="w-12 h-12 rounded-lg object-cover" />
                  ) : (
                    <div className="w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center">
                      <ImageIcon size={16} className="text-gray-400" />
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{approveModal.name}</p>
                    <p className="text-xs text-gray-400">Supplier price: ₹{approveModal.price?.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              {/* Admin price input */}
              <div className="w-full mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2 text-left">Selling Price (₹)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-semibold">₹</span>
                  <input
                    type="number"
                    value={approvePrice}
                    onChange={e => setApprovePrice(e.target.value)}
                    className="w-full rounded-xl pl-9 pr-4 py-3 text-sm text-gray-900 bg-gray-50 border border-gray-200 outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-50 transition-all duration-200"
                    placeholder="Enter selling price"
                  />
                </div>
                {approvePrice && Number(approvePrice) > approveModal.price && (
                  <p className="mt-2 text-xs text-emerald-600 flex items-center gap-1">
                    <TrendingUp size={12} /> Profit margin: ₹{(Number(approvePrice) - approveModal.price).toLocaleString()}
                  </p>
                )}
              </div>

              <div className="flex gap-3 w-full">
                <button
                  onClick={() => { setApproveModal(null); setApprovePrice(''); }}
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleApprove(approveModal)}
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 cursor-pointer"
                  style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}
                >
                  Approve
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ──── REJECT MODAL ──── */}
      {rejectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(6px)' }}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-7 relative">
            <button
              onClick={() => { setRejectModal(null); setRejectReason(''); }}
              className="absolute top-4 right-4 text-gray-300 hover:text-gray-500 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
            <div className="flex flex-col items-center text-center">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: 'linear-gradient(135deg, #fef2f2, #fee2e2)' }}
              >
                <Ban size={24} className="text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Reject Product</h3>
              <p className="text-sm text-gray-400 mb-5">Provide a reason for rejecting "{rejectModal.name}"</p>

              <div className="w-full mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2 text-left">Rejection Reason</label>
                <textarea
                  rows={3}
                  value={rejectReason}
                  onChange={e => setRejectReason(e.target.value)}
                  className="w-full rounded-xl px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-gray-200 outline-none focus:border-red-400 focus:ring-4 focus:ring-red-50 transition-all duration-200 resize-none placeholder:text-gray-300"
                  placeholder="e.g. Image quality too low, price inconsistency..."
                />
              </div>

              <div className="flex gap-3 w-full">
                <button
                  onClick={() => { setRejectModal(null); setRejectReason(''); }}
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleReject}
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ──── EDIT PRICE MODAL ──── */}
      {editPriceId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(6px)' }}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-7 relative">
            <button
              onClick={() => { setEditPriceId(null); setEditPriceValue(''); }}
              className="absolute top-4 right-4 text-gray-300 hover:text-gray-500 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
            <div className="flex flex-col items-center text-center">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)' }}
              >
                <IndianRupee size={24} className="text-emerald-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Edit Selling Price</h3>
              <p className="text-sm text-gray-400 mb-5">Update the admin selling price</p>

              <div className="w-full mb-6">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-semibold">₹</span>
                  <input
                    type="number"
                    value={editPriceValue}
                    onChange={e => setEditPriceValue(e.target.value)}
                    className="w-full rounded-xl pl-9 pr-4 py-3 text-sm text-gray-900 bg-gray-50 border border-gray-200 outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-50 transition-all duration-200"
                    placeholder="Enter new price"
                    autoFocus
                  />
                </div>
              </div>

              <div className="flex gap-3 w-full">
                <button
                  onClick={() => { setEditPriceId(null); setEditPriceValue(''); }}
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleUpdatePrice(editPriceId)}
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 cursor-pointer"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)' }}
                >
                  Update Price
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
          style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(6px)' }}
          onClick={() => setViewProduct(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setViewProduct(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-lg bg-white/80 border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>

            {/* Image */}
            <div className="w-full h-56 bg-gray-100 relative overflow-hidden rounded-t-2xl">
              {viewProduct.images && viewProduct.images.length > 0 ? (
                <img src={viewProduct.images[0]} alt={viewProduct.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <ImageIcon size={40} className="text-gray-300" />
                </div>
              )}
              <div className="absolute top-3 left-3 flex gap-1.5">
                {statusBadge(viewProduct)}
                {viewProduct.isFeatured && (
                  <span className="px-2.5 py-1 rounded-lg bg-amber-400 text-white text-xs font-bold flex items-center gap-1">
                    <Star size={11} /> Featured
                  </span>
                )}
              </div>
            </div>

            {/* Body */}
            <div className="p-7">
              {viewProduct.category && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-500 bg-indigo-50 px-2.5 py-1 rounded-lg uppercase tracking-wide mb-3">
                  <Tag size={10} /> {viewProduct.category}
                </span>
              )}

              <h2 className="text-xl font-bold text-gray-900 mb-1">{viewProduct.name}</h2>
              {viewProduct.brand && <p className="text-sm text-gray-400 mb-1">Brand: {viewProduct.brand}</p>}
              {viewProduct.supplierName && <p className="text-sm text-gray-400 mb-4">Supplier: {viewProduct.supplierName}</p>}

              {viewProduct.description && (
                <p className="text-sm text-gray-500 leading-relaxed mb-5 pb-5 border-b border-gray-100">
                  {viewProduct.description}
                </p>
              )}

              {/* Details grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">Supplier Price</p>
                  <p className="text-lg font-bold text-gray-900">₹{viewProduct.price?.toLocaleString()}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">Admin Price</p>
                  <p className="text-lg font-bold text-emerald-600">
                    {viewProduct.adminPrice ? `₹${viewProduct.adminPrice.toLocaleString()}` : 'Not set'}
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
              </div>

              {/* Rejection reason in detail */}
              {viewProduct.status === 'rejected' && viewProduct.rejectionReason && (
                <div className="mt-4 px-4 py-3 bg-red-50 rounded-xl border border-red-100">
                  <p className="text-xs font-semibold text-red-600 mb-1">Rejection Reason</p>
                  <p className="text-sm text-red-600">{viewProduct.rejectionReason}</p>
                </div>
              )}

              {/* Images */}
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
      <FeedbackPopup/>
    </div>
  );
};

export default AdminDashboard;