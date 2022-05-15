import express from "express";
import handler from "./handler.js";

const port = 8080;
const app = express();

app.use("/", express.static("web-app/static"));

app.use("/", express.json());
app.post("/", function (req, res) {
    const responseObj = handler(req.body);
    res.end(JSON.stringify(responseObj));
});

app.listen(port, function () {
    console.log(`Listening on port ${port} – http://localhost:${port}`);
});
