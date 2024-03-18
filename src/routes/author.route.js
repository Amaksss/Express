const express = require("express");
const authorRoute = express.Router();


//Read
authorRoute.get("/", (req, res) => {
    res.json({ name: "Amaka", height: 160 });
});

//Read
authorRoute.get("/:authorId", (req, res) => {
    console.log(req.params);
    res.json({ authorname: "Amaka", height: 160 });
});

//Create
authorRoute.post("/", (req, res) => {
    res.json({ message: "Author created", author: req.body });
});

//Update
authorRoute.put("/", (req, res) => {
    res.json({ Message: "Author details updated"});
});

//Update
authorRoute.patch("/", (req, res) => {
    res.json({ Message: "Author details updated"});
});

//Delete
authorRoute.delete("/", (req, res) => {
    res.json({ Message: "Author Deleted"})
})


module.exports = authorRoute;

