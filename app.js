if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
// require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate"); //another version of ejs
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport"); //authentication
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

//router
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const categoryRouter = require("./routes/category.js");

//MAIN CODE
const dbUrl = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(dbUrl);
}
//uses
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static("public"));
//
//middlewares
const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("error", (err) => {
  console.log("Error in Mongo Session Store", err);
});

const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize()); //initialize before use
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser()); //to store user info into session
passport.deserializeUser(User.deserializeUser()); //to delete it when session is closed

//middleware for flash better way then passing with ejs file
app.use((req, res, next) => {
  res.locals.success = req.flash("success"); //use it in ejs file
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user; //we cannot access req.user in ejs so we define it in locals
  next();
});

//ROUTES
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);
app.use("/listings/category", categoryRouter);

app.listen("8080", () => {
  console.log("app is listening on 8080");
});
app.get("/listings", (req, res) => {
  res.send("Server running successfully");
});
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found"));
});
//ERROR HANDLING MIDDLEWARES
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "something went wrong" } = err;
  res.render("Error.ejs", { message });
});
