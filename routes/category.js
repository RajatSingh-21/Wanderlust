const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router.get(
  "/domes",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const listings = await Listing.find({});
    res.render("./listing/category/Domes.ejs", { listings });
  })
);
router.get(
  "/rooms",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const listings = await Listing.find({});
    res.render("./listing/category/Rooms.ejs", { listings });
  })
);
router.get(
  "/mountains",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const listings = await Listing.find({});
    res.render("./listing/category/mountains.ejs", { listings });
  })
);
router.get(
  "iconic_cities",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const listings = await Listing.find({});
    res.render("./listing/category/iconic_cities.ejs", { listings });
  })
);
router.get(
  "/castles",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const listings = await Listing.find({});
    res.render("./listing/category/castles.ejs", { listings });
  })
);
router.get(
  "/pools",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const listings = await Listing.find({});
    res.render("./listing/category/pools.ejs", { listings });
  })
);
router.get(
  "/camping",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const listings = await Listing.find({});
    res.render("./listing/category/camping.ejs", { listings });
  })
);
router.get(
  "/farm",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const listings = await Listing.find({});
    res.render("./listing/category/farms.ejs", { listings });
  })
);
router.get(
  "arctic",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const listings = await Listing.find({});
    res.render("./listing/category/arctic.ejs", { listings });
  })
);
module.exports = router;
