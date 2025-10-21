const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

module.exports.createReview = async (req, res) => {
  let listing = await Listing.findById(req.params.id); //to get listing
  let newReview = new Review(req.body.review); //create new review
  newReview.author = req.user._id; // same as we did for listing.owner

  listing.reviews.push(newReview); //save data to review array in listing

  await newReview.save();
  await listing.save(); //save is async
  req.flash("success", "New Review Created");

  res.redirect(`/listings/${req.params.id}`);
};

module.exports.destroyReview = async (req, res) => {
  let { id, reviewId } = req.params;

  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } }); //pull review id
  await Review.findByIdAndDelete(reviewId); //review se delete

  req.flash("success", "Review Deleted");
  res.redirect(`/listings/${id}`);
};
