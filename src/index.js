const express = require("express");

const { PORT } = process.env;
const port = PORT ?? 8081;

const app = express();

app.get("/health", (_, res) => {
    return res.status(200).json({
        message: "health check ok",
    });
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
