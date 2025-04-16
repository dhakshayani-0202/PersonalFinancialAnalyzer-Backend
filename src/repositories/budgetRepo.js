const Budget = require('../models/budgetModel');
const AppError = require('../utils/appError');
const mongoose = require('mongoose');

const createBudget = async (budgetData) => {
    const budget = await Budget.create(budgetData);
    if (!budget) {
        throw new AppError("Failed to create budget", 400);
    }
    return budget;
};

const updateBudget = async (id, budgetData) => {
    try {
        const budget = await Budget.findByIdAndUpdate(id, budgetData, { new: true });
        if (!budget) {
            throw new AppError("budget not found", 400);
        }
        return budget;
    } catch (error) {
        throw new AppError("Failed to update budget", 400, error);
    }
};

const deleteBudget = async (id) => {
    const budget = await Budget.findByIdAndDelete(id);

    if (!budget) {
        throw new AppError("budget not found", 404);
    }

    return budget;
};

const getAllBudgets = async () => {
    return await Budget.find().sort({ updatedAt: -1 });
};

const getBudgetById = async (id) => {
    const budget = await Budget.findById(id);
    if (!budget) {
        throw new AppError("budget not found", 400);
    }
    return budget;
};

module.exports = {
    createBudget,
    updateBudget,
    deleteBudget,
    getAllBudgets,
    getBudgetById,
};
