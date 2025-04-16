const express = require('express');
const { createTransaction, deleteTransaction, getAllTransactions, getTransactionById, updateTransaction } = require('../controllers/transactionController');

const router = express.Router(); 

router.post('/createTransaction',createTransaction);
router.put('/updateTransaction/:id',updateTransaction);
router.get('/getTransactionById/:id',getTransactionById);
router.delete('/deleteTransaction/:id',deleteTransaction);
router.get('/getAllTransactions',getAllTransactions);

module.exports=router;
