const Listing = require("../models/listing.js");

module.exports.index = async (req, res) => {
  const listings = await Listing.find({});
  res.render("./listing/index.ejs", { listings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listing/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner")
    .populate("category");
  if (!listing) {
    req.flash("error", "Listing does not exist");
    res.redirect("/listings");
  }
  console.log(listing);
  res.render("listing/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.listing); //creates new instance
  newListing.owner = req.user._id; //when we create listing on our own
  newListing.image = { url, filename };
  // console.log(req.body.listing.category);
  await newListing.save();
  req.flash("success", "New Lisiting Created");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing does not exist");
    res.redirect("/listings");
  }
  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_300,w_250");

  res.render("listing/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing }); //another way to acess req.params
  if (typeof req.file != "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }
  req.flash("success", " Lisiting Updated");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deleted = await Listing.findByIdAndDelete(id);
  console.log(deleted);
  req.flash("success", "Lisiting Deleted");
  res.redirect("/listings");
};
