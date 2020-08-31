const express = require("express");
const showdata = require("./showdata");
const { seasons } = require("./showdata");

const app = express();
app.set("view engine", "pug");
app.use(express.static("public"));

app.get("/", (req, res) => {
  return res.render("index", { showdata });
});

app.get("/seasons/:number", (req, res) => {
  const seasonData = showdata.seasons.find((season) => {
    return season.number === parseInt(req.params.number);
  });
  return res.render("seasons", { season: seasonData });
});

app.all("*", (req, res) => {
  return res.sendStatus(404);
});

app.listen(1337, () => {
  console.log("Listienning on 1337..."); //eslint-disable-line no-console
});
