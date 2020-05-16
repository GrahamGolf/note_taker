const router = require("express").Router();
const fs = require("fs");
const uuidv1 = require("uuid/v1");


router.get("/notes", function(req, res) {
    fs.readFile("./db/db.json", "utf8", function(error, data) {
        if (error) {
          return console.log(error);
        }
        res.send(JSON.parse(data));
      });
  });

router.post("/notes", async function(req, res) {
    console.log(req.body);
    const title = req.body.title;
    const text = req.body.text;

    const createNewNote = {
      title: title,
      text: text,
      id: uuidv1(),
    };

  fs.readFile("./db/db.json", "utf8", async function(error, data) { //
      if (error) {
        return console.log(error);
      }
      
      const notesArray = JSON.parse(data);//

      notesArray.push(createNewNote);

      const updateDB = await fs.writeFile("./db/db.json", JSON.stringify(notesArray), function(err) {
        if (err) {
        return console.log(err);
        }
      });
    res.send(updateDB);
  });
});

router.delete("/notes/:id", function(req, res) {
  fs.readFile("./db/db.json", "utf8", async function(error, data) { 
    if (error) {
      return console.log(error);
    }
    
    const notesArray = JSON.parse(data);

    const noteIndex = notesArray.findIndex(note => {return (note.id == req.params.id)});
    let deleted = false;
    if (noteIndex != -1) {
      notesArray.splice(noteIndex, 1);
      deleted = true;
    };
    res.json(deleted);
  

    const updateDB = await fs.writeFile("./db/db.json", JSON.stringify(notesArray), function(err) {
      if (err) {
      return console.log(err);
      }
    });
  res.send(updateDB);
});
});

module.exports = router;