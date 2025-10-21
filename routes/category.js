const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router.route("/domes").get(
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const listings = await Listing.find({});
    res.render("./listing/category/Domes.ejs", { listings });
  })
);
router.route("/rooms").get(
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const listings = await Listing.find({});
    res.render("./listing/category/Rooms.ejs", { listings });
  })
);
router.route("/mountains").get(
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const listings = await Listing.find({});
    res.render("./listing/category/mountains.ejs", { listings });
  })
);
router.route("/iconic_cities").get(
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const listings = await Listing.find({});
    res.render("./listing/category/iconic_cities.ejs", { listings });
  })
);
router.route("/castles").get(
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const listings = await Listing.find({});
    res.render("./listing/category/castles.ejs", { listings });
  })
);
router.route("/pools").get(
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const listings = await Listing.find({});
    res.render("./listing/category/pools.ejs", { listings });
  })
);
router.route("/camping").get(
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const listings = await Listing.find({});
    res.render("./listing/category/camping.ejs", { listings });
  })
);
router.route("/farm").get(
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const listings = await Listing.find({});
    res.render("./listing/category/farms.ejs", { listings });
  })
);
router.route("/arctic").get(
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const listings = await Listing.find({});
    res.render("./listing/category/arctic.ejs", { listings });
  })
);
module.exports = router;
