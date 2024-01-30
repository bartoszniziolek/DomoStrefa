import express from "express";
import {
  createProperty,
  getProperties,
} from "../controllers/property.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createProperty);
router.get("/all", verifyToken, getProperties);

export default router;
