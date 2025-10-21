const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  //object required
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().required().min(0),
    image: Joi.string().allow("", null),
    category: Joi.string().allow("", null).required(),
  }).required(), //name = listing
});
//this chema is for server-side validaiton and is different from schema created for model
module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required(),
});
