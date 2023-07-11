const express = require('express');
router = express.Router();

const signup = require("../controllers/auth");

router.post("/signup",signup);

module.exports = router;