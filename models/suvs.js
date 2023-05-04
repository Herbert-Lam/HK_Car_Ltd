const mongoose = require("mongoose");

const suvSchema = new mongoose.Schema(
  {
    year: {
      type: Number,
      min: 1900,
      max: 2100,
      required: [true, "year can not be empty"],
    },
    model: {
      type: String,
      required: [true, "model can not be empty"],
    },
    trim: {
      type: String,
      required: [true, "trim can not be empty"],
    },
    colorOption: [
      {
        type: String,
      },
    ],
    power: {
      horsePower: { type: Number },
      rpm: { type: Number },
    },
    drivetrain: {
      type: String,
      required: [true, "Drivetrain can not be empty"],
    },
    transmission: {
      type: String,
      required: [true, "Transmission can not be empty"],
    },
    price: {
      type: Number,
    },
    imgSrc: {
      type: String,
    },
  },
  { collection: "SUVs" }
);

const SuvModel = mongoose.model("SUV", suvSchema);
module.exports = SuvModel;
