const express = require("express");
const cors = require("cors");
const path = require("path");

const { PORT, FRONTEND_URL, REVERSE_PROXY_URL } = process.env;
const port = PORT ?? 8081;

const app = express();
app.use(
    cors({
        origin: [FRONTEND_URL ?? "", REVERSE_PROXY_URL ?? ""],
    })
);

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
