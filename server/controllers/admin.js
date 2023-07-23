const AllPizzaModel = require('../models/AllPizzaModel');

exports.allPizzas = async (req,res) => {
    try{
        const data = await AllPizzaModel.find();
        return res.json({
            success:true,
            data: data,
            message:"Data Fetched Successfully"
        })
    }   catch(error){
        console.log('Error in all pizzas controller', error);
    } 
}

exports.addPizza = async (req,res) =>{
    try{
        const {pizzaName,smallPizzaPrice,mediumPizzaPrice,largePizzaPrice,category} = req.body;
        try{
            const dbEntry = await AllPizzaModel.create({
                pizzaName,smallPizzaPrice,mediumPizzaPrice,largePizzaPrice,category
            })
            return res.status(200).json({
                success:true,
                message:"Entry created successfully"
            })
        }catch(err){
            return res.json({
                success:false,
                error: err,
                message:"Error in creating entry"
            })
        }
    } catch(error){
        console.log("Error adding pizza", error);
    }
}