const express = require('express')
const productRoutes = require('./productRoutes')
const typeRoutes = require('./typeRoutes')
const transactionRoutes = require('./transactionRoutes')
const budgetRoutes = require('./budgetRoutes')
const rentRoutes = require('./rentRoutes')
const router = express.Router();
const baseUrl = "/api/v1";
router.use(`${baseUrl}/inventory/product`, productRoutes);
router.use(`${baseUrl}/inventory/type`, typeRoutes);
router.use(`${baseUrl}/transaction`, transactionRoutes);
router.use(`${baseUrl}/budget`, budgetRoutes);
router.use(`${baseUrl}/rent`, rentRoutes);

module.exports = router;
