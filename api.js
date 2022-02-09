
const express = require("express");
const app = express();

const dataExt = require("./data-ext")

const PORT = 8080;


app.get("/random", (req, res) => {
    res.send(dataExt.fetchRandomRecipe());
});

app.listen(PORT);
