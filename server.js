const express = require("express");
const http = require("http");
const path = require("path");

const port = process.env.PORT || 5000;
const app = express();
const publicPath = path.join(__dirname, "dist");
var server = http.createServer(app);

app.use(express.static(publicPath));

app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});

server.listen(port, () => {
    console.log("Server Running!", port);
});