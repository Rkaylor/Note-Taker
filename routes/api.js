const db = require("../db/db.json");
const fs = require("fs");
const router = require("express").Router();
const path = require("path");

// We will need to read data from "../db/db.json" to store to a variable
const dataDB = fs.readFileSync(path.resolve(__dirname, "../db/db.json"), "utf8");
let notes = JSON.parse(dataDB);
console.log("notes", notes);

router.get("/api/notes", function(req, res) {
    console.log("get /api/notes");
    res.json(notes);
})

module.exports = router;

