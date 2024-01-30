import express from "express";
import {
  createEstateAgency,
  getEstateAgencies,
} from "../controllers/estateAgency.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createEstateAgency);
router.get("/all", verifyToken, getEstateAgencies);

export default router;
