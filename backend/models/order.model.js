import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        // price is the price of the product at the time of purchase
        price: { type: Number, required: true },
        // product is the id of the product
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
    shippingAddress: {
      // this is the same as the shippingAddress object in the user model
      address: { type: String, required: true },
      city: { type: String, required: true },
      // postalCode is the same as zipCode
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    // paymentMethod is the same as payment
    paymentMethod: { type: String, required: true },
    // paymentResult is the same as paymentResult
    paymentResult: {
      // this is the object that PayPal returns
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    itemsPrice: { type: Number, required: true, default: 0.0 },
    taxPrice: { type: Number, required: true, default: 0.0 },
    shippingPrice: { type: Number, required: true, default: 0.0 },
    totalPrice: { type: Number, required: true, default: 0.0 },
    // isPaid is the same as paid
    isPaid: { type: Boolean, required: true, default: false },
    // paidAt is the same as paidAt
    paidAt: { type: Date },
    // isDelivered is the same as delivered
    isDelivered: { type: Boolean, required: true, default: false },
    // deliveredAt is the same as deliveredAt
    deliveredAt: { type: Date },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
