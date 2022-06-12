// v 1.0.0
const express = require("express");
const routes = require("./routes/main");

// Init Express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add Handlebars
app.set("view engine", "hbs");
app.set("view options", { layout: false });
app.set("views", __dirname + "/views");

// Routes
app.use('/', routes)

// run server
const port = 5000;
app.listen(port, () => {
  console.log(`Application running on http://localhost:${port}`);
});
