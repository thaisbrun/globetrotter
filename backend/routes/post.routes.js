const express = require("express");
const router = express.Router();

//Routes : request et response
router.get("/", (req, res) => {
    res.json({ message: "top" });
});

router.post("/", (req, res) => {
    res.json({ message: req.body.message });
});

router.put('/:id')

module.exports = router;

