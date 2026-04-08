const { Schema,  model } = require('../connection');

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
  }, { timestamps: true });

export default model('Product', productSchema);