import { errorHandler } from "../utils/error.js";
import EstateAgency from "../models/estateAgency.model.js";

export const createEstateAgency = async (req, res, next) => {
  const { name, address, phoneNumber, email } = req.body;
  const newEstateAgency = new EstateAgency({
    name,
    address,
    phoneNumber,
    email,
  });

  try {
    await newEstateAgency.save();
    res.status(201).json("EstateAgency created successfully!");
  } catch (error) {
    next(error);
  }
};

export const getEstateAgencies = async (req, res, next) => {
  try {
    const agencies = await EstateAgency.find();
    res.status(200).json(agencies);
  } catch (error) {
    next(error);
  }
};
