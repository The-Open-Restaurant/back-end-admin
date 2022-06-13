"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get("/", function (req, res, next) {
    res.render("home", {
        layout: "layoutMain",
        title: "Welcome to The Open Restaurant",
        caption: "this totally works man!",
    });
});
module.exports = router;
