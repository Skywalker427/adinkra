const express = require("express");
const router = express.Router();
let symbols = require("../symbols/symbols");

router.get("/", (req,res,next)=>{

    res.status(200)
    .json(symbols);
})

module.exports = router;