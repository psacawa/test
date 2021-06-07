let express = require("express");
let process = require("process")

let app = express();
app.use(express.json());

let PORT = parseInt(process.env["PORT"]) || 8080;

app.get("/", (req, res) => {
  res.send("paths: /square")
})


app.get("/square", (req, res) => {
  let x = parseInt(req.query.x);
  if (!Number.isNaN(x)) {
    console.log(`serving request x=${x}`);
    res.send((x * x).toString());
  } else {
    console.log("error: need x query param");
    res.send("error: need x query param");
  }
});

app.listen(PORT, () => {
  console.log(`serving on ${PORT}`);
});
