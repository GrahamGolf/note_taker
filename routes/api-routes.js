const router = require("express").Router();
const fs = require("fs");


router.get("/notes", async function(req, res) {
    console.log("Hello");
    const readNotes = await fs.readFile("./db/db.json", "utf8", function(error, data) {

        if (error) {
          return console.log(error);
        }
      
        console.log(data);
      
      });
    res.send(JSON.stringify(readNotes)); //changed from parse to stringify
  });

// router.post("/notes", function(req, res) {
//     return res.json(characters);
//   });
  
//   // Displays a single character, or returns false
// router.delete("/notes/:id", function(req, res) {
// })

module.exports = router;