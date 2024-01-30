import FavouriteListing from "../models/favouriteListing.model.js";
import Listing from "../models/listing.model.js";
import Property from "../models/property.model.js";
import { errorHandler } from "../utils/error.js";

export const addToFavourites = async (req, res, next) => {
  const { listingRef, userRef } = req.body;
  const newFavouriteListing = new FavouriteListing({
    listingRef,
    clientRef: userRef,
  });

  try {
    await newFavouriteListing.save();
    res.status(201).json("Listing added to favourites!");
  } catch (error) {
    next(error);
  }
};

export const getFavourites = async (req, res, next) => {
  try {
    const favourites = await FavouriteListing.find({
      clientRef: req.params.id,
    });
    const listings = await Promise.all(
      favourites.map(async (favourite) => {
        const listing = await Listing.findById(favourite.listingRef);
        const property = await Property.findById(listing.property);
        return { ...listing.toObject(), property: property.toObject() };
      })
    );
    res.status(200).json(listings);
  } catch (error) {
    next(error);
  }
};
