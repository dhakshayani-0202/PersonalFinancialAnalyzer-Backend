const express = require('express');
const { createBudget, deleteBudget, getAllBudgets, getBudgetById, updateBudget } = require('../controllers/budgetController');

const router = express.Router(); 

router.post('/createBudget',createBudget);
router.put('/updateBudget/:id',updateBudget);
router.get('/getBudgetById/:id',getBudgetById);
router.delete('/deleteBudget/:id',deleteBudget);
router.get('/getAllBudgets',getAllBudgets);

module.exports=router;
