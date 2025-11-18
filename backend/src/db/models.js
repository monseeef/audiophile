import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image: {
    mobile: String,
    tablet: String,
    desktop: String,
  },
  category: { type: String, required: true },
  categoryImage: {
    mobile: String,
    tablet: String,
    desktop: String,
  },
  newProduct: { type: Boolean, default: false },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  features: { type: String, required: true },
  includes: [
    {
      quantity: Number,
      item: String,
    },
  ],
  gallery: {
    first: {
      mobile: String,
      tablet: String,
      desktop: String,
    },
    second: {
      mobile: String,
      tablet: String,
      desktop: String,
    },
    third: {
      mobile: String,
      tablet: String,
      desktop: String,
    },
  },
  others: [
    {
      slug: String,
      name: String,
      image: {
        mobile: String,
        tablet: String,
        desktop: String,
      },
    },
  ],
});

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  zip: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  eMoneyNumber: { type: String },
  eMoneyPin: { type: String },
  items: { type: Array, required: true },
  total: { type: Number, required: true },
  shipping: { type: Number, required: true },
  vat: { type: Number, required: true },
  grandTotal: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Product = mongoose.model("Product", productSchema);
export const Order = mongoose.model("Order", orderSchema);
