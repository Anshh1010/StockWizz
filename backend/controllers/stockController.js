const Stock = require('../models/StockModels')
const mongoose = require('mongoose')
    // get all stocks
const getStocks = async(req, res) => {
        const stocks = await Stock.find({}).sort({ createdAt: -1 })
        res.status(200).json(stocks)
    }
    // get a single stock's info
const getStock = async(req, res) => {
        const { id } = req.params
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No such stock' })
        }
        const stock = await Stock.findById(id)
        if (!stock) {
            return res.status(404).json({ error: 'No such stock' })
        }
        res.status(200).json(stock)
    }
    // add a stock
const addStock = async(req, res) => {
        const { name, price, quantity } = req.body
        try {
            const stock = await Stock.create({ name, price, quantity })
            res.status(200).json(stock)
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
    // delete stock from portfolio
const deleteStock = async(req, res) => {
        const { id } = req.params
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'No such stock' })
        }
        const stock = await Stock.findOneAndDelete({ _id: id })
        if (!stock) {
            res.status(400).json({ error: 'No such Stock' })
        }
        res.status(200).json(stock)
    }
    // update status of stock
const updateStock = async(req, res) => {
        const { id } = req.params
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'No such stock' })
        }
        const stock = await Stock.findOneAndUpdate({ _id: id }, {
            ...req.body
        })
        if (!stock) {
            res.status(400).json({ error: 'No such Stock' })
        }
        res.status(200).json(stock)
    }
    // get comparison
    // get future price of stock
module.exports = {
    getStock,
    getStocks,
    addStock,
    deleteStock,
    updateStock
}