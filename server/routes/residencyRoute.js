import express from "express";
import { createResidency, getAllresidencies, getresidency } from "../controllers/residencyCntrl.js";
const router = express.Router();

router.post("/create", createResidency);
router.get("/Allresid", getAllresidencies);
router.get("/:id", getresidency);

export { router as residencyRoute };
