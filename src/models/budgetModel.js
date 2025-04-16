// models/Budget.ts
const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema({
  categories: {
    Food: { type: Number, default: 0 },
    Transport: { type: Number, default: 0 },
    Health: { type: Number, default: 0 },
    Entertainment: { type: Number, default: 0 },
    Rent: { type: Number, default: 0 },
    Utilities: { type: Number, default: 0 },
    Shopping: { type: Number, default: 0 },
    Other: { type: Number, default: 0 },
  },
}, {
  timestamps: true,
});
const BudgetModel = mongoose.model("Budget", budgetSchema);
module.exports = BudgetModel;
