let express = require("express");
let process = require("process");
let axios = require("axios").default;

let app = express();
// app.use(express.json());

let BACKEND_HOST = process.env["BACKEND_HOST"] || "localhost";
let BACKEND_PORT = process.env["BACKEND_PORT"] || 8080;
let PORT = process.env["PORT"] || 8000;

app.get("/", (req, res) => {
  let url = `http://${BACKEND_HOST}:${BACKEND_PORT}/square`;
  let y = parseInt(req.query.y);
  if (!Number.isNaN(y)) {
    console.log(`serving request y=${y}`);
    axios
      .get(url, {
        params: {
          x: y,
        },
      })
      .then((response) => {
        res.send((response.data + 2 ).toString());
      })
      .catch((error) => {
        res.send("backend query failed");
        console.error(`backend: ${error}`);
      });
  } else {
    console.error("need param y");
    res.send("need param y");
  }
});

app.listen(PORT, () => {
  console.log(`serving frontend on ${PORT}`);
  console.log(`backend ${BACKEND_HOST}:${BACKEND_PORT}`);
});
