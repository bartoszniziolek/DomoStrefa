import express from "express";
import {
  addToFavourites,
  getFavourites,
} from "../controllers/favouriteListing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/add", verifyToken, addToFavourites);
router.get("/all/:id", verifyToken, getFavourites);

export default router;
