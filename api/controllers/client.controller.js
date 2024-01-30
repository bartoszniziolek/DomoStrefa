import Client from "../models/client.model.js";
import { errorHandler } from "../utils/error.js";

export const addClient = async (req, res, next) => {
  const { firstName, lastName, email, phoneNumber, userRef } = req.body;
  const newClient = new Client({
    firstName,
    lastName,
    email,
    phoneNumber,
    userRef,
  });
  try {
    await newClient.save();
    res.status(201).json("Client created successfully!");
  } catch (error) {
    next(error);
  }
};

export const getClients = async (req, res, next) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (error) {
    next(error);
  }
};

export const getClient = async (req, res, next) => {
  try {
    const client = await Client.findById(req.params.id);
    res.status(200).json(client);
  } catch (error) {
    next(error);
  }
};

export const updateClient = async (req, res, next) => {
  try {
    const updatedClient = await Client.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedClient);
  } catch (error) {
    next(error);
  }
};

export const deleteClient = async (req, res, next) => {
  try {
    await Client.findByIdAndDelete(req.params.id);
    res.status(200).json("Client has been deleted!");
  } catch (error) {
    next(error);
  }
};

export const getUserClients = async (req, res, next) => {
  try {
    const clients = await Client.find({ userRef: req.params.id });
    res.status(200).json(clients);
  } catch (error) {
    next(error);
  }
};

export const getClientByUser = async (req, res, next) => {
  try {
    const client = await Client.findOne({
      userRef: req.params.id,
      _id: req.params.clientId,
    });
    res.status(200).json(client);
  } catch (error) {
    next(error);
  }
};
