require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const PORT = process.env.PORT || 3000;
const methodOverride = require('method-override')
const Mysteries = require("./models/store.js")

// Set up middleware
app.use(methodOverride('method'))
app.use((req, res, next) => {
  console.log("I run for all routes")
  next()
})
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'))


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
//home
app.get('/', (req, res) => {
  res.render('Home')
})

// Index Route to Storefront
app.get("/mysteries", (req, res) => {
  Mysteries.find({}, (error, allMysteries) => {
    res.render("Index", {
      allMysteries: allMysteries, // getting all mysteries from db to pass as props
    })
  })
})

// New Route to Find New Mystery Item
app.get("/mysteries/new", (req, res) => {
  res.render("New")
})

// Delete - Delete this one record
app.delete('/mysteries/:id', (req, res) => {
  console.log(req.params)
  Mysteries.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/mysteries') // redirect back to mysteries index
  })
})

// update - Modifying a record
app.put('/mysteries/buy/:id', (req, res) => {
  Mysteries.findByIdAndUpdate(req.params.id, (err, foundMysteries) => {
    let newMysteries = foundMysteries
    newMysteries.quantity = newMysteries.quantity - 1

    Mysteries.findByIdAndUpdate(req.params.id, newMysteries, (err, foundMysteries) => {
      console.log('updated Mysteries')
      res.redirect(`/mysteries/${req.params.id}`) // redirecting to the Show page
    })
  })
})
app.put('/mysteries/:id', (req, res) => {
  Mysteries.findByIdAndUpdate(req.params.id, req.body, (err, allMysteries) => {
      console.log(allMysteries)
      res.redirect(`/mysteries/${req.params.id}`) // redirecting to the Show page
  })
})

// Create
app.post('/mysteries', (req, res) => {
  let mysteriesBody = req.body

  Mysteries.create(mysteriesBody, (err, createdMysteries) => {
    res.redirect('/mysteries')
  })
})

// Edit - Get the form with the record to update
app.get('/mysteries/:id/edit', (req, res) => {
  Mysteries.findById(req.params.id, (err, foundMysteries) => { // find the mystery items
    if (!err) {
      res.render(
        'Edit',
        {
          mysteries: foundMysteries // pass in the found pokemon so we can prefill the form
        }
      )
    } else {
      res.send({ msg: err.message })
    }
  })
})

// Route showing mystery item name and image
app.get("/mysteries/:id", (req, res) => {
  Mysteries.findById(req.params.id, (err, foundMysteries) => {
    res.render("Show", {
      mysteries: foundMysteries
    })
  })
})
app.get("/mysteries/:id", (err, foundMysteries) => {
  res.render("Show", {
    mysteries: foundMysteries
  })
})

app.listen(PORT, () => {
  console.log("listening")
})