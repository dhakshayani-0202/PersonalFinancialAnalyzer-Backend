const { 
    createBudgetService, 
    deleteBudgetService, 
    getAllBudgetsService, 
    getBudgetByIdService, 
    updateBudgetService ,
   
} = require('../services/budgetService');

const catchAsync = require('../utils/catchAsync');
const { sendSuccessResponse } = require('../utils/response');

const createBudget = catchAsync(async (req, res) => {
    const budgets = await createBudgetService(req.body);
    sendSuccessResponse(res, budgets, 201, "Budget created successfully");
});

const updateBudget = catchAsync(async (req, res) => {
    const budgets = await updateBudgetService(req.params.id, req.body);
    sendSuccessResponse(res, budgets, 200, "Budget updated successfully");
});

const deleteBudget = catchAsync(async (req, res) => {
    const budgets = await deleteBudgetService(req.params.id);
    sendSuccessResponse(res, budgets, 200, "Budget deleted successfully");
});

const getAllBudgets = catchAsync(async (_req, res) => {
    const budgets = await getAllBudgetsService();
    sendSuccessResponse(res, budgets, 200, "Budgets fetched successfully");
});

const getBudgetById = catchAsync(async (req, res) => {
    const budgets = await getBudgetByIdService(req.params.id);
    sendSuccessResponse(res, budgets, 200, "Budget fetched successfully");    
});

module.exports = {
    createBudget,
    updateBudget,
    deleteBudget,
    getAllBudgets,
    getBudgetById,
};
