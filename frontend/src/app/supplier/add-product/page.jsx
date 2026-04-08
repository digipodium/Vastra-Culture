'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';
import {
  Package,
  IndianRupee,
  Tag,
  ImagePlus,
  Boxes,
  Star,
  Upload,
  AlertCircle,
  ArrowLeft,
  X,
  Sparkles,
  CheckCircle2,
  Info,
} from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const categories = [
  'Men',
  'Women',
  'Kids',
  'Accessories',
  'Footwear',
  'Ethnic Wear',
  'Western Wear',
  'Sportswear',
  'Winterwear',
  'Formal Wear',
];

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Min 3 characters').required('Product name is required'),
  price: Yup.number().positive('Must be a positive number').required('Price is required'),
  description: Yup.string().min(10, 'Min 10 characters'),
  category: Yup.string().required('Category is required'),
  brand: Yup.string(),
  stock: Yup.number().integer('Whole numbers only').min(0, 'Min 0').required('Stock is required'),
  discount: Yup.number().min(0, 'Min 0').max(100, 'Max 100'),
  isFeatured: Yup.boolean(),
});

const AddProduct = () => {
  const [imageUrls, setImageUrls] = useState('');
  const [previewImages, setPreviewImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      description: '',
      category: '',
      brand: '',
      stock: 0,
      discount: 0,
      isFeatured: false,
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      const images = imageUrls.split(',').map(u => u.trim()).filter(u => u.length > 0);
      const productData = { ...values, price: Number(values.price), stock: Number(values.stock), discount: Number(values.discount), images };
      try {
        await axios.post(`${API_URL}/product/add`, productData);
        toast.success('Product added successfully!');
        setSubmitted(true);
        setTimeout(() => {
          resetForm();
          setImageUrls('');
          setPreviewImages([]);
          setSubmitted(false);
        }, 2000);
      } catch (err) {
        console.error(err);
        toast.error('Failed to add product.');
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const handleImageUrlChange = (e) => {
    const value = e.target.value;
    setImageUrls(value);
    setPreviewImages(value.split(',').map(u => u.trim()).filter(u => u.length > 0));
  };

  const removeImage = (idx) => {
    const updated = previewImages.filter((_, i) => i !== idx);
    setPreviewImages(updated);
    setImageUrls(updated.join(', '));
  };

  const hasError = (field) => formik.touched[field] && formik.errors[field];

  /* Progress tracker */
  const totalFields = 4;
  let filled = 0;
  if (formik.values.name.length >= 3) filled++;
  if (formik.values.price > 0) filled++;
  if (formik.values.category) filled++;
  if (formik.values.stock >= 0 && formik.values.stock !== '') filled++;
  const progress = Math.round((filled / totalFields) * 100);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ──── STICKY HEADER ──── */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-[900px] mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href="/supplier/dashboard"
              className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 hover:border-gray-300 transition-all duration-200"
            >
              <ArrowLeft size={18} />
            </a>
            <div>
              <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2 tracking-tight">
                <Sparkles size={18} className="text-indigo-500" />
                Add New Product
              </h1>
              <p className="text-xs text-gray-400 mt-0.5">Supplier Portal • Vastra Culture</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Progress pill */}
            <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-50 border border-gray-200">
              <div className="w-8 h-1 rounded-full bg-gray-200 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${progress}%`,
                    background: progress === 100
                      ? 'linear-gradient(90deg, #10b981, #059669)'
                      : 'linear-gradient(90deg, #6366f1, #818cf8)',
                  }}
                />
              </div>
              <span className="text-[11px] font-semibold text-gray-400">{progress}%</span>
            </div>

            <button
              id="submit-product-top"
              type="button"
              disabled={isSubmitting}
              onClick={formik.handleSubmit}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white flex items-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              style={{
                background: submitted
                  ? 'linear-gradient(135deg, #10b981, #059669)'
                  : 'linear-gradient(135deg, #6366f1, #4f46e5)',
                boxShadow: submitted
                  ? '0 4px 14px rgba(16,185,129,0.25)'
                  : '0 4px 14px rgba(99,102,241,0.25)',
              }}
            >
              {isSubmitting ? (
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              ) : submitted ? (
                <CheckCircle2 size={15} />
              ) : (
                <Upload size={15} />
              )}
              {isSubmitting ? 'Publishing...' : submitted ? 'Published!' : 'Publish'}
            </button>
          </div>
        </div>
      </header>

      {/* ──── FORM BODY ──── */}
      <div className="max-w-[900px] mx-auto px-6 md:px-8 py-8 pb-16">
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">

          {/* ═══════ BASIC INFORMATION ═══════ */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            {/* Section header */}
            <div className="px-7 pt-7 pb-0 flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center border"
                style={{
                  background: 'linear-gradient(135deg, #eef2ff, #e0e7ff)',
                  borderColor: '#c7d2fe',
                }}
              >
                <Package size={18} className="text-indigo-500" />
              </div>
              <div>
                <h2 className="text-[15px] font-bold text-gray-900">Basic Information</h2>
                <p className="text-xs text-gray-400 mt-0.5">Product name, description & classification</p>
              </div>
            </div>

            <div className="px-7 pb-7 space-y-5">
              {/* Product Name */}
              <div>
                <label htmlFor="product-name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Product Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="product-name"
                  type="text"
                  name="name"
                  placeholder="e.g. Royal Silk Kurta"
                  className={`w-full rounded-xl px-4 py-3 text-sm text-gray-900 bg-gray-50 outline-none transition-all duration-200 border ${
                    hasError('name')
                      ? 'border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-50'
                      : 'border-gray-200 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50'
                  } placeholder:text-gray-300`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {hasError('name') && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} /> {formik.errors.name}
                  </p>
                )}
              </div>

              {/* Description */}
              <div>
                <label htmlFor="product-description" className="block text-sm font-semibold text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  id="product-description"
                  name="description"
                  rows={4}
                  placeholder="Describe your product — materials, fit, occasion..."
                  className={`w-full rounded-xl px-4 py-3 text-sm text-gray-900 bg-gray-50 outline-none resize-none leading-relaxed transition-all duration-200 border ${
                    hasError('description')
                      ? 'border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-50'
                      : 'border-gray-200 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50'
                  } placeholder:text-gray-300`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                />
                {hasError('description') && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} /> {formik.errors.description}
                  </p>
                )}
              </div>

              {/* Category & Brand */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="product-category" className="block text-sm font-semibold text-gray-700 mb-2">
                    Category <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="product-category"
                      name="category"
                      className={`w-full appearance-none rounded-xl px-4 py-3 pr-10 text-sm bg-gray-50 outline-none cursor-pointer transition-all duration-200 border ${
                        hasError('category')
                          ? 'border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-50'
                          : 'border-gray-200 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50'
                      } ${formik.values.category ? 'text-gray-900' : 'text-gray-400'}`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.category}
                    >
                      <option value="" disabled>Select category</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat} className="text-gray-900">{cat}</option>
                      ))}
                    </select>
                    <Tag size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" />
                  </div>
                  {hasError('category') && (
                    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={12} /> {formik.errors.category}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="product-brand" className="block text-sm font-semibold text-gray-700 mb-2">
                    Brand
                  </label>
                  <input
                    id="product-brand"
                    type="text"
                    name="brand"
                    placeholder="e.g. Vastra Culture"
                    className="w-full rounded-xl px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-gray-200 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 transition-all duration-200 placeholder:text-gray-300"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.brand}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ═══════ PRICING & INVENTORY ═══════ */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <div className="px-7 pt-7 pb-0 flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center border"
                style={{
                  background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
                  borderColor: '#a7f3d0',
                }}
              >
                <IndianRupee size={18} className="text-emerald-500" />
              </div>
              <div>
                <h2 className="text-[15px] font-bold text-gray-900">Pricing & Inventory</h2>
                <p className="text-xs text-gray-400 mt-0.5">Set price, stock levels & discount</p>
              </div>
            </div>

            <div className="px-7 pb-7 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Price */}
                <div>
                  <label htmlFor="product-price" className="block text-sm font-semibold text-gray-700 mb-2">
                    Price (₹) <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-semibold">₹</span>
                    <input
                      id="product-price"
                      type="number"
                      name="price"
                      placeholder="1999"
                      className={`w-full rounded-xl pl-9 pr-4 py-3 text-sm text-gray-900 bg-gray-50 outline-none transition-all duration-200 border ${
                        hasError('price')
                          ? 'border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-50'
                          : 'border-gray-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-50'
                      } placeholder:text-gray-300`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.price}
                    />
                  </div>
                  {hasError('price') && (
                    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={12} /> {formik.errors.price}
                    </p>
                  )}
                </div>

                {/* Stock */}
                <div>
                  <label htmlFor="product-stock" className="block text-sm font-semibold text-gray-700 mb-2">
                    Stock <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Boxes size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300" />
                    <input
                      id="product-stock"
                      type="number"
                      name="stock"
                      placeholder="50"
                      className={`w-full rounded-xl pl-10 pr-4 py-3 text-sm text-gray-900 bg-gray-50 outline-none transition-all duration-200 border ${
                        hasError('stock')
                          ? 'border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-50'
                          : 'border-gray-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-50'
                      } placeholder:text-gray-300`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.stock}
                    />
                  </div>
                  {hasError('stock') && (
                    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={12} /> {formik.errors.stock}
                    </p>
                  )}
                </div>

                {/* Discount */}
                <div>
                  <label htmlFor="product-discount" className="block text-sm font-semibold text-gray-700 mb-2">
                    Discount
                  </label>
                  <div className="relative">
                    <input
                      id="product-discount"
                      type="number"
                      name="discount"
                      placeholder="10"
                      className={`w-full rounded-xl px-4 pr-10 py-3 text-sm text-gray-900 bg-gray-50 outline-none transition-all duration-200 border ${
                        hasError('discount')
                          ? 'border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-50'
                          : 'border-gray-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-50'
                      } placeholder:text-gray-300`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.discount}
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-semibold">%</span>
                  </div>
                  {hasError('discount') && (
                    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={12} /> {formik.errors.discount}
                    </p>
                  )}
                </div>
              </div>

              {/* Selling price preview */}
              {formik.values.price > 0 && (
                <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-100">
                  <Info size={14} className="text-emerald-500 shrink-0" />
                  <span className="text-sm text-gray-600">
                    Selling price:{' '}
                    <strong className="text-emerald-600">
                      ₹{(formik.values.price - (formik.values.price * (formik.values.discount || 0)) / 100).toFixed(2)}
                    </strong>
                    {formik.values.discount > 0 && (
                      <span className="line-through ml-2 text-gray-400">
                        ₹{Number(formik.values.price).toFixed(2)}
                      </span>
                    )}
                  </span>
                </div>
              )}
            </div>
          </section>

          {/* ═══════ PRODUCT IMAGES ═══════ */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <div className="px-7 pt-7 pb-0 flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center border"
                style={{
                  background: 'linear-gradient(135deg, #f5f3ff, #ede9fe)',
                  borderColor: '#c4b5fd',
                }}
              >
                <ImagePlus size={18} className="text-violet-500" />
              </div>
              <div>
                <h2 className="text-[15px] font-bold text-gray-900">Product Images</h2>
                <p className="text-xs text-gray-400 mt-0.5">Add image URLs separated by commas</p>
              </div>
            </div>

            <div className="px-7 pb-7 space-y-4">
              <div>
                <label htmlFor="product-images" className="block text-sm font-semibold text-gray-700 mb-2">
                  Image URLs <span className="text-gray-400 font-normal">(comma separated)</span>
                </label>
                <textarea
                  id="product-images"
                  rows={2}
                  placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
                  className="w-full rounded-xl px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-gray-200 outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-50 transition-all duration-200 resize-none placeholder:text-gray-300"
                  value={imageUrls}
                  onChange={handleImageUrlChange}
                />
              </div>

              {/* Previews */}
              {previewImages.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {previewImages.map((url, idx) => (
                    <div
                      key={idx}
                      className="relative group w-[84px] h-[84px] rounded-xl overflow-hidden border border-gray-200 bg-gray-100"
                    >
                      <img
                        src={url}
                        alt={`Preview ${idx + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.src = ''; e.target.className = 'hidden'; }}
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(idx)}
                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center cursor-pointer"
                      >
                        <X size={16} className="text-white" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* ═══════ FEATURED TOGGLE ═══════ */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="px-7 py-6 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300"
                  style={{
                    background: formik.values.isFeatured
                      ? 'linear-gradient(135deg, #fffbeb, #fef3c7)'
                      : '#f9fafb',
                    borderColor: formik.values.isFeatured ? '#fde68a' : '#e5e7eb',
                  }}
                >
                  <Star
                    size={18}
                    className="transition-colors duration-300"
                    style={{
                      color: formik.values.isFeatured ? '#f59e0b' : '#d1d5db',
                    }}
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Featured Product</p>
                  <p className="text-xs text-gray-400 mt-0.5">Highlight on the homepage featured section</p>
                </div>
              </div>

              {/* Custom toggle */}
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  id="product-featured"
                  type="checkbox"
                  name="isFeatured"
                  className="sr-only peer"
                  checked={formik.values.isFeatured}
                  onChange={formik.handleChange}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-indigo-100 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all after:duration-300 after:shadow-sm peer-checked:bg-indigo-500 transition-colors duration-300" />
              </label>
            </div>
          </section>

          {/* ═══════ SUBMIT ACTIONS ═══════ */}
          <div className="flex items-center justify-end gap-3 pt-2 pb-8">
            <a
              href="/supplier/dashboard"
              className="px-6 py-3 text-sm font-semibold text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
            >
              Cancel
            </a>
            <button
              id="submit-product"
              type="submit"
              disabled={isSubmitting}
              className="px-7 py-3 rounded-xl text-sm font-semibold text-white flex items-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              style={{
                background: submitted
                  ? 'linear-gradient(135deg, #10b981, #059669)'
                  : 'linear-gradient(135deg, #6366f1, #4f46e5)',
                boxShadow: submitted
                  ? '0 4px 16px rgba(16,185,129,0.25)'
                  : '0 4px 16px rgba(99,102,241,0.25)',
              }}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Publishing...
                </>
              ) : submitted ? (
                <>
                  <CheckCircle2 size={16} />
                  Published!
                </>
              ) : (
                <>
                  <Upload size={16} />
                  Publish Product
                </>
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddProduct;