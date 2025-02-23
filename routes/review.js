const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../public/util/wrapAsync.js");
const ExpressError = require("../public/util/expressError.js");
const { reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing");

const validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body.review);

  if (error) {
    let errorMessage = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errorMessage);
  }
  next();
};

// Submit a new review
router.post(
  "/",

  wrapAsync(async (req, res) => {
    console.log("Received request for review with params:", req.params);
    console.log("Review body:", req.body);
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      console.log("Listing not found");
      throw new ExpressError(404, "Listing not found");
    }
    const newReview = new Review(req.body.review);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    console.log("Review successfully saved");
    res.redirect(`/listings/${listing._id}`);
  })
);

// Delete a review
router.delete(
  "/:reviewId",
  wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, {
      $pull: { reviews: { _id: reviewId } },
    });
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);
  })
);

module.exports = router;
