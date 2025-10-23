import mongoose, { model } from "mongoose";
const { ObjectId } = mongoose.Schema.Types;
const CarSchema = new mongoose.Schema(
  {
    //   📝 ------------------------
    owner: { type: ObjectId, ref: "User" },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    image: { type: String, required: true },
    year: { type: Number, required: true },
    category: { type: String, required: true },
    seating_capacity: { type: Number, required: true },
    fuel_type: { type: String, required: true },
    transmission: { type: String, required: true },
    pricePerDay: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    isAvaliable: { type: String, required: true },
  },
  { timestamps: true }
);

const Car = mongoose.model("Car", CarSchema);

export default Car;
