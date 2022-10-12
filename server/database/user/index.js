import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    address: [{ detail: { type: String }, for: { type: String } }],
    phoneNumber: [{ type: Number }],
  },
  {
    timestamps: true,
  }
);

// attachments
UserSchema.methods.generateJwtToken = function () {};

// helper functions
UserSchema.statics.findByEmailAndPhone = async () => {};

UserSchema.statics.findByEmailAndPassword = async () => {};

export const UserModel = mongoose.model("users", UserSchema);
