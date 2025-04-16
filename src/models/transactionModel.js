const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: false,
    },

    amount: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

const transactionModel = mongoose.model("Transaction", transactionSchema);
module.exports = transactionModel;
