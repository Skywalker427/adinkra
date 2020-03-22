const express = require("express");
const router = express.Router();
let symbols = require("../symbols/symbols");





router.get("/", (req,res,next)=>{

    let symbolName = req.query.name;
    let symbolMeaning = req.query.meaning;
    let symbolSynopsis = req.query.synopsis;

    let reponseSymbols = [];

    if(symbolName){
        symbols.forEach((symbol)=>{
            if(symbol.name.toLowerCase().includes(symbolName.toLowerCase())){
                reponseSymbols.push(symbol)
            }
        })
    }
    if(symbolMeaning){
        symbols.forEach((symbol)=>{
            if(symbol.meaning.toLowerCase().includes(symbolMeaning.toLowerCase())){
                reponseSymbols.push(symbol)
            }
        })
    }

    if((symbolMeaning || symbolName) && reponseSymbols){
        res.json(reponseSymbols)
    }


    res.status(200)
    .send(req.query.name);
})

module.exports = router;