const express = require("express");
const app = express(); //exe the fun returend a new express function
const apiRouter = require("./src/routes/index");
const { connect } = require("./src/configs/database");
const cors = require("cors");
const User = require("./src/models/user");
const bodypaser = require("body-parser");
const auth = require("./src/middlewares/authjwt");
const randomcontroller = require("./src/controllers/randomfood");

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodypaser.json());
app.use(bodypaser.urlencoded({ extended: false }));
require("./src/routes/login")(app);
app.get("/", (req, res) => {
  res.send("hi from server").status(200);
});
app.get("/food", randomcontroller.getAll);
app.post("/food", randomcontroller.create);
app.use("/api", [auth.verifyToken], apiRouter);
const port = 3004;
app.listen(port, async () => {
  await connect();
  console.log(`server started on port no ${port}`);
  console.log("server started sucessfully");
});
