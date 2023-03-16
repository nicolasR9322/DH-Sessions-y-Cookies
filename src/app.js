const express = require("express");
const app = express();
const PORT = 3030;
const session = require("express-session");
const cookieParser = require("cookie-parser");
// router
const indexRouter = require("./routes/indexRouter");
const cookies = require("./middlewares/cookies");
const localsSession = require("./middlewares/localsSession");

// template engines
app.set("view engine", "ejs");
app.set("views", "./src/views")

// middlewares
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));
app.use(session({
    secret:"DH",
    resave: false,
    saveUninitialized: true
}))
app.use(cookieParser());
app.use(localsSession)
app.use(cookies)

// routes
app.use("/", indexRouter)

// puerto
app.listen(PORT,() => console.log(`servidor levantado en http://localhost:${PORT}`));