const mongoose = require('mongoose');

const allPizzaSchema = new mongoose.Schema({
    pizzaName:{
        type:String,
        required:true,
    },
    smallPizzaPrice:{
        type:String,
        required:true
    },
    mediumPizzaPrice:{
        type:String,
        required:true
    },
    largePizzaPrice:{
        type:String,
        required:true
    },
    category:{
        type:String,
        enum: ["veg","non-veg"]
    }
})

module.exports = mongoose.model("allpizza",allPizzaSchema);
