const router = require("express").Router();
const fs = require("fs");


router.get("/notes", function(req, res) {
    console.log("Hello");
    fs.readFile("../db/db.json", "utf8", function(error, data) {

        if (error) {
          return console.log(error);
        }
      
        console.log(data);
      
      });
    return res.json(data);
  });

// router.post("/notes", function(req, res) {
//     return res.json(characters);
//   });
  
//   // Displays a single character, or returns false
// router.delete("/notes/:id", function(req, res) {
// })

module.exports = router;