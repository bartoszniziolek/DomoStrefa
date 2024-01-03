import express from "express";
import {
  addClient,
  deleteClient,
  getClient,
  getClients,
  getClientByUser,
  getUserClients,
  updateClient,
} from "../controllers/client.controller.js";

const router = express.Router();

router.post("/add", addClient);
router.get("/", getClients);
router.get("/:id", getClient);
router.put("/update/:id", updateClient);
router.delete("/delete/:id", deleteClient);
router.get("/user/:id", getUserClients);
router.get("/user/:id/:clientId", getClientByUser);

export default router;
