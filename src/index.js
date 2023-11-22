const express = require("express");
const cors = require("cors");
const path = require("path");

const { PORT } = process.env;
const port = PORT ?? 8081;

const app = express();

app.use((req, _, next) => {
    req.url = req.url.replace(/^\/green/, "");
    next();
});

app.use("/", express.static(path.join(__dirname, "..", "dist")));

app.get("/api/health", (_, res) => {
    return res.status(200).json({
        message: "health check ok",
    });
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
