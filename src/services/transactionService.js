const { updateTransaction, createTransaction, deleteTransaction, getAllTransactions, getTransactionById } = require('../repositories/transactionRepo');
const AppError = require('../utils/appError');

const createTransactionService = async (transactionData) => {
    return await createTransaction(transactionData);
};

const updateTransactionService = async (id, transactionData) => {
    const updatedtransaction = await updateTransaction(id, transactionData);
    if (!updatedtransaction) {
        throw new AppError("Failed to update transaction", 400);
    }
    return updatedtransaction;
};

const deleteTransactionService = async (id) => {
    await deleteTransaction(id);
    return getAllTransactions();
};

const getAllTransactionsService = async () => {
    return await getAllTransactions();
};

const getTransactionByIdService = async (id) => {
    const transactionData = await getTransactionById(id);
    if (!transactionData) {
        throw new AppError("Transaction not found", 404);
    }
    return transactionData;
};

module.exports = {
    createTransactionService,
    updateTransactionService,
    deleteTransactionService,
    getAllTransactionsService,
    getTransactionByIdService,
};
