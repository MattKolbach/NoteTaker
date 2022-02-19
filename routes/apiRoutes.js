const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

router.get("/notes", (req, res) => {
  let dataBase = fs.readFileSync("db/db.json")//read the database
  dataBase = JSON.parse(dataBase); //parse to turn it into js (an array of objects) strips out the string quotes
  res.json(dataBase); //converts back to json and sends it to browser
});

router.post("/notes", (req, res) => {
    //new note from user
  const newNote = req.body;
  newNote.id = uuidv4()
  let dataBase = fs.readFileSync("db/db.json")
  dataBase = JSON.parse(dataBase);
  dataBase.push(newNote);
  fs.writeFileSync("db/db.json", JSON.stringify(dataBase))
  res.json(newNote);
});


module.exports = router;