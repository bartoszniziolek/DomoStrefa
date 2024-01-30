import { errorHandler } from "../utils/error.js";
import Property from "../models/property.model.js";

export const createProperty = async (req, res, next) => {
  const { address, area, numberOfRooms, parking, furnished, agent, agency } =
    req.body;
  const newProperty = new Property({
    address,
    area,
    numberOfRooms,
    parking,
    furnished,
    agent,
    agency,
  });

  try {
    await newProperty.save();
    res.status(201).json("Property created successfully!");
  } catch (error) {
    next(error);
  }
};

export const getProperties = async (req, res, next) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    next(error);
  }
};
