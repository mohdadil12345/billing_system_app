
const mongoose = require("mongoose")

const itemSchema = ({
    name: String,
    price: Number,
  
})


const itemModel = mongoose.model("item", itemSchema)

module.exports = {
    itemModel
}