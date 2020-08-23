const db = require("../db/db.json");
const fs = require("fs");
const router = require("express").Router();
const path = require("path");

module.exports = function(router) {
// We will need to read data from "../db/db.json" to store to a variable
const dataDB = fs.readFileSync(path.resolve(__dirname, "../db/db.json"), "utf8");
let notes = JSON.parse(dataDB);
console.log("notes", notes);

router.get("/api/notes", function(req, res) {
    console.log("get /api/notes");
    res.json(notes);
})

// router.post("api/notes", function (req,res){
//     newText = req.body;
//     notes.push(newText);
//     res.json(notes);
//     console.log("note save");

// fs.writeFile("./db/db.json", JSON.stringify(notes), function (err) {
//     if (err) throw err;
//     res.end(notes);
//     console.log("sucessful write");
// });    
// });
// router.delete("/api/notes/:id", function(req, res){
//     // DELETE /api/notes/:id - Should receive a query parameter containing the id of a  note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
//     const { id } = req.
//     console.log("delete post");
// });


}



