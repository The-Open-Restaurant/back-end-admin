import { Request, Response, NextFunction } from "express";
const express = require("express");
const router = express.Router();

router.get("/", function (req: Request, res: Response, next: NextFunction) {
  res.render("home", {
    layout: "layoutMain",
    title: "Welcome to The Open Restaurant",
    caption: "this totally works man!",
  });
});

router.get("/admin", function (req: Request, res: Response, next: NextFunction) {
  res.render("home-admin", {
    layout: "layoutAdmin",
    title: "Welcome to The Open Restaurant",
    caption: "this totally works man!",
  });
});

module.exports = router;
