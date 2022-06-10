// v 1.0.0
import express, { Request, Response, NextFunction } from "express";
// Consolidate is a Template engine consolidation library.
// https://github.com/tj/consolidate.js
import cons from "consolidate";

// Init Express
const app = express();

// Add Handlebars

app.engine("handlebars", cons.handlebars);
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req: Request, res: Response) {
  res.render("home", {layout: "main"});
});

app.listen(3000, () => {
  console.log("Application running on http://localhost:3000");
});
