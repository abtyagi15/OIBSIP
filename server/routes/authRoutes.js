const express = require('express');
router = express.Router();

const {signup, login} = require("../controllers/auth");
const { addPizza, allPizzas } = require('../controllers/admin');



router.post("/signup",signup);
router.post("/login",login);

//admin related
router.post("/addpizza",addPizza);
router.get("/getpizzas",allPizzas)
module.exports = router;