const { 
    createTransactionService, 
    deleteTransactionService, 
    getAllTransactionsService, 
    getTransactionByIdService, 
    updateTransactionService ,
   
} = require('../services/transactionService');

const catchAsync = require('../utils/catchAsync');
const { sendSuccessResponse } = require('../utils/response');

const createTransaction = catchAsync(async (req, res) => {
    const transactions = await createTransactionService(req.body);
    sendSuccessResponse(res, transactions, 201, "Transaction created successfully");
});

const updateTransaction = catchAsync(async (req, res) => {
    const transactions = await updateTransactionService(req.params.id, req.body);
    sendSuccessResponse(res, transactions, 200, "Transaction updated successfully");
});

const deleteTransaction = catchAsync(async (req, res) => {
    const transactions = await deleteTransactionService(req.params.id);
    sendSuccessResponse(res, transactions, 200, "Transaction deleted successfully");
});

const getAllTransactions = catchAsync(async (_req, res) => {
    const transactions = await getAllTransactionsService();
    sendSuccessResponse(res, transactions, 200, "Transactions fetched successfully");
});

const getTransactionById = catchAsync(async (req, res) => {
    const transactions = await getTransactionByIdService(req.params.id);
    sendSuccessResponse(res, transactions, 200, "Transaction fetched successfully");    
});

module.exports = {
    createTransaction,
    updateTransaction,
    deleteTransaction,
    getAllTransactions,
    getTransactionById,
};
