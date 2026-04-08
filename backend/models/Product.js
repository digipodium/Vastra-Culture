const { Schema,  model } = require('../connection');

const reviewSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'users' },
  name: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String },
}, { timestamps: true });

const productSchema = new Schema({
    
  name: { type: String, required: true, },

  price: { type: Number, required: true, },

  description: {  type: String,  },

  category: {  type: String, required: true,  },

  brand: {  type: String,},

  images: [ {  type: String,  }],

  stock: { type: Number, required: true, default: 0,  },

  rating: { type: Number, default: 0, },

  numReviews: { type: Number, default: 0, },

  reviews: [reviewSchema],
  
  isFeatured: {type: Boolean, default: false, },

  discount: {  type: Number,  default: 0, },

  supplierName: { type: String, default: '' },

  supplierEmail: { type: String, default: '' },

  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },

  adminPrice: { type: Number, default: null },

  isPublished: { type: Boolean, default: false },

  rejectionReason: { type: String, default: '' },
  }, { timestamps: true });

module.exports = model('Product', productSchema);