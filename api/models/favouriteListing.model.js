import mongoose from "mongoose";

const favouriteListingSchema = new mongoose.Schema({
  listingRef: {
    type: String,
    required: true,
  },
  clientRef: {
    type: String,
    required: true,
  },
});

favouriteListingSchema.index({ listingRef: 1, clientRef: 1 }, { unique: true });

const FavouriteListing = mongoose.model(
  "FavouriteListing",
  favouriteListingSchema
);

export default FavouriteListing;
