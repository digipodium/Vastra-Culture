const { Schema,  model } = require('../connection');


const reviewSchema = new Schema({

  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  name: { type: String,  required: true, },

  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },

  comment: { type: String, },

}, { timestamps: true });

export default model('Review', reviewSchema);