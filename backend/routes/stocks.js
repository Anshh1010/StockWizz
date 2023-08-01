const express = require('express')
const router = express.Router()
const Stock = require('../models/StockModels.js')
const { addStock, getStock, getStocks, deleteStock, updateStock } = require('../controllers/stockController')


// get all stocks
router.get('/', getStocks)
    // get a single stock's info
router.get('/:id', getStock)
    //add a stock
router.post('/', addStock)
    // delete stock from portfolio
router.delete('/:id', deleteStock)
    // update status of stock
router.patch('/:id', updateStock)
    //get future price of stock
router.get('/future/:id', (req, res) => {
        res.json('Future prices of this stock')
    })
    //get comparison
router.post('/:id', (req, res) => {
    res.json({ mssg: 'stock comparison graphs' })
})
module.exports = router