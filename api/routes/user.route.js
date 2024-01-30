import express from "express";
import {
  deleteUser,
  updateUser,
  getUserListings,
  getUser,
  getEstateAgents,
  setEstateAgentToEstateAgency,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/listings/:id", verifyToken, getUserListings);
router.get("/:id", verifyToken, getUser);
router.get("/estate-agent/all", verifyToken, getEstateAgents);
router.put(
  "/set-estate-agent-to-estate-agency",
  verifyToken,
  setEstateAgentToEstateAgency
);

export default router;
