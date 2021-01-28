const express = require("express");
global.app = express();

app.get("/", (req, res) => {
    res.status(400).send(`api test route`);
});

app.listen(4001, () => {
    console.log(`API running on ====>  4001`)
});
