const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const app = express();
const db = require("./database");
const bodyparser = require("body-parser");

const indexRouter = require("./routes/index");
const authorRouter = require("./routes/authors");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressEjsLayouts);
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: false, limit: "10mb" }));

app.use("/", indexRouter);
app.use("/authors", authorRouter);

app.listen(process.env.PORT || 3000);
