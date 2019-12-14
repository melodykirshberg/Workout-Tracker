const router = require("express").Router();
const path = require("path");

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/all", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/result.html"));
});

module.exports = router;