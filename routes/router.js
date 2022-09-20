const express = require('express');

const expenseController = require('../controller/expensecal');

const router = express.Router();

router.get('/addExpense', expenseController.getAddExpenses);

router.post('/addExpense', expenseController.postAddExpenses);

router.get('/editExpense/:id', expenseController.getEditExpense)

router.get('/deleteExpense/:id', expenseController.getDeleteUser);

router.get('/', expenseController.getExpenses);

module.exports = router;