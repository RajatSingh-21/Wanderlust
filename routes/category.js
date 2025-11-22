const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router.get(
  "/trending",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const listings = await Listing.find({});
    res.render("./listing/category/trending.ejs", { listings });
  })
);

router.post(
  "/search",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    let { search } = req.body;

    // Trim and validate search input
    search = search ? search.trim() : "";

    // If search is empty, redirect back
    if (!search || search.length === 0) {
      req.flash("error", "Please enter a search term");
      return res.redirect("/listings");
    }

    console.log("Search query:", search);

    // Ensure search is a string before using regex
    const listings = await Listing.find({
      $or: [
        { title: { $regex: search.toString(), $options: "i" } },
        { country: { $regex: search.toString(), $options: "i" } },
        { location: { $regex: search.toString(), $options: "i" } },
      ],
    });

    console.log("Listings found:", listings.length);
    res.render("./listing/category/search.ejs", { listings, search });
  })
);

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
    res.render("./listing/category/Mountains.ejs", { listings });
  })
);
router.get(
  "/cities",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const listings = await Listing.find({});
    res.render("./listing/category/cities.ejs", { listings });
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
  "/arctic",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const listings = await Listing.find({});
    res.render("./listing/category/arctic.ejs", { listings });
  })
);
module.exports = router;
