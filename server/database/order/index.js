import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
    orderDetails: [
      {
        food: [
          {
            details: { type: mongoose.Types.ObjectId, ref: "foods" },
            quantity: { type: Number, required: true },
          },
        ],
        quantity: { type: Number, required: true },
        payMode: { type: String, required: true },
        status: { type: String, default: "Placed" },
        paymentDetails: {
          itemTotal: { type: Number, required: true },
          promo: { type: String, required: true },
          tax: { type: String, required: true },
          razorpay_payment_id: { type: String, required: true },
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const OrderModel = mongoose.model("orders", OrderSchema);
