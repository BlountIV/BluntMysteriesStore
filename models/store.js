const mongoose = require("mongoose")

const mysteriesSchemas = new mongoose.Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    about: {type: String, required : true},
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
})

const Mysteries = mongoose.model("Mysteries", mysteriesSchemas);

module.exports = Mysteries