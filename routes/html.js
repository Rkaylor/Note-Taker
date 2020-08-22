const path = require("path");
const router = require("express").Router()

router.get("/notes", function(req, res){
    console.log("get /notes")
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})

router.get("*", function(req, res){
    console.log("get *")

    res.sendFile(path.join(__dirname, "../public/index.html"));
})

module.exports =  router