const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const db = require("./db/comments");

//app.use(express.json());

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Fv test api");
});

app.post("/comments", async (req, res) => {
  const comment = await db.createComment(req.body);
  res.status(201).json(comment[0]);
});

app.get("/comments", async (req, res) => {
  try {
    const comments = await db.getComments();
    res.status(200).json(comments);
  } catch (e) {
    console.log(e.message);
  }
});

app.delete("/comments/:id", async (req, res) => {
  try {
    const response = await db.deleteComment(req.params.id);
    res.status(200).json(response);
  } catch (e) {
    console.log(e);
  }
});

app.listen(8080, () => console.log("listening on port 8080"));
