//Requirements
require("dotenv").config();
const express = require("express");
const app = express();
//mongo
const mongoose = require("mongoose");
const methodOverride = require("method-override");

//engine
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(methodOverride("_method"));

//----------{{Middleware}}
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

mongoose.set("strictQuery", false);

app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

//----------{{Routes}}

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/home", (req, res) => {
  res.render("Home");
});

app.listen(3000, (rq, res) => {
  console.log("Listenting to port 3000");
});
