const express = require("express");
const app = express();
const routeApi = require("./routes/api");
const routehtml = require("./routes/html");

const PORT = process.env.PORT || 3000;

app.use(express.static("./public"))
// app.use("/assets", express.static("./assets"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require("./routes/html")(app);
// require("./routes/api")(app);


app.use("/api", routeApi);

app.use("/", routehtml);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });