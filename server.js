require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = 3000
const methodOverride = require('method-override')
const Product = require("./models/store.js")

// Set up middleware
app.use(methodOverride('_method'))
app.use((req, res, next) => {
    console.log("I run for all routes")
    next()
})
app.use(express.urlencoded({ extended: false }))

app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())

mongoose.set("strictQuery", true)

// Setting up Mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.once("open", () => {
    console.log("connected to mongo")
})


// routes



app.listen(port, () => {
    console.log("listening")
})