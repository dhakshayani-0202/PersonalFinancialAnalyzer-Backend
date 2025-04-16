const Transaction = require('../models/transactionModel');
const AppError = require('../utils/appError');
const mongoose = require('mongoose');

const createTransaction = async (transactionData) => {
    const transaction = await Transaction.create(transactionData);
    if (!transaction) {
        throw new AppError("Failed to create transaction", 400);
    }
    return transaction;
};

const updateTransaction = async (id, transactionData) => {
    try {
        const transaction = await Transaction.findByIdAndUpdate(id, transactionData, { new: true });
        if (!transaction) {
            throw new AppError("transaction not found", 400);
        }
        return transaction;
    } catch (error) {
        throw new AppError("Failed to update transaction", 400, error);
    }
};

const deleteTransaction = async (id) => {
    const transaction = await Transaction.findByIdAndDelete(id);

    if (!transaction) {
        throw new AppError("transaction not found", 404);
    }

    return transaction;
};

const getAllTransactions = async () => {
    return await Transaction.find().sort({ updatedAt: -1 });
};

const getTransactionById = async (id) => {
    const transaction = await Transaction.findById(id);
    if (!transaction) {
        throw new AppError("transaction not found", 400);
    }
    return transaction;
};

module.exports = {
    createTransaction,
    updateTransaction,
    deleteTransaction,
    getAllTransactions,
    getTransactionById,
};
