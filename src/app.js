const express = require("express");
const app = express();
const PORT = 3030;
const session = require("express-session");

// router
const indexRouter = require("./routes/indexRouter")

// template engines
app.set("view engine", "ejs");
app.set("views", "./src/views")

// middlewares
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));
app.use(session({secret:"DH"}))

// routes
app.use("/", indexRouter)

// puerto
app.listen(PORT,() => console.log(`servidor levantado en http://localhost:${PORT}`));