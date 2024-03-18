const express = require('express');
const app = express();
const authorRoute = require("./routes/author.route");
const bookRoute = require("./routes/books.route");
const logger = require("./logger");

//Middleware
app.use(express.json());//(without this your application cannot read your json payload)
app.use(logger);
app.use("/author", authorRoute);
app.use("/books", bookRoute);


app.get("/", (req, res) => {
    res.send("Hello world")
});

//To catch all routes that do not exist
app.all("*", (req, res) => {
    req.statusCode(404).send("Page not found");
});


app.listen(3000, () => {
    console.log("Server is running on port 3000")
});