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
    if(symbolSynopsis){
        symbols.forEach((symbol)=>{
            if(symbol.synopsis.toLowerCase().includes(symbolSynopsis.toLowerCase())){
                reponseSymbols.push(symbol)
            }
        })
    }

    if(reponseSymbols.length>0){
        res.status(200)
        .set({"Content-Type":"application/json"})
        .json(reponseSymbols)
    }
    else{
        if(symbolMeaning || symbolName || symbolSynopsis){
            res.status(404)
            .json({"error":"No symbol matched your query"})
        }
        else{res.status(200)
            .set({"Content-Type":"application/json"})
            .json(symbols);
        }
    }

    



})

module.exports = router;