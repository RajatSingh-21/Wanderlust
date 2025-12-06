const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const { required } = require("joi");
//
const listingSchema = new Schema({
  //schema
  title: {
    type: String,
    required: true,
  },
  description: String,
  images: [
    {
      url: String,
      filename: String,
    },
  ],
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  category: {
    type: String,
    enum: [
      "trending",
      "Rooms",
      "Cities",
      "Mountains",
      "Castles",
      "Pools",
      "Camping",
      "Farms",
      "Arctic",
      "Domes",
    ],
    geometry: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      coordinates: {
        type: [Number],
        default: [78.9629, 20.5937], // Default: India center
      },
    },
    required: true,
  },
});
//later mongoose middleware
listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    let del = await Review.deleteMany({ _id: { $in: listing.reviews } });
    console.log(del);
  }
});

const Listing = mongoose.model("Listing", listingSchema); //model // collection name //schema name
module.exports = Listing;
