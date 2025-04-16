const { updateBudget, createBudget, deleteBudget, getAllBudgets, getBudgetById } = require('../repositories/budgetRepo');
const AppError = require('../utils/appError');

const createBudgetService = async (budgetData) => {
    return await createBudget(budgetData);
};

const updateBudgetService = async (id, budgetData) => {
    const updatedbudget = await updateBudget(id, budgetData);
    if (!updatedbudget) {
        throw new AppError("Failed to update budget", 400);
    }
    return updatedbudget;
};

const deleteBudgetService = async (id) => {
    await deleteBudget(id);
    return getAllBudgets();
};

const getAllBudgetsService = async () => {
    return await getAllBudgets();
};

const getBudgetByIdService = async (id) => {
    const budgetData = await getBudgetById(id);
    if (!budgetData) {
        throw new AppError("Budget not found", 404);
    }
    return budgetData;
};

module.exports = {
    createBudgetService,
    updateBudgetService,
    deleteBudgetService,
    getAllBudgetsService,
    getBudgetByIdService,
};
