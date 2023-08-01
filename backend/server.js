require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const stockRoutes = require('./routes/stocks')

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path);
    console.log(req.method);
    next()
})


app.use('/api/stocks', stockRoutes)

//connect
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Server listening");
        })
    })
    .catch((error) => {
        console.log(error)
    })