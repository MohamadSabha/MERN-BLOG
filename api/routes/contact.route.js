import express from "express";
import { Sendemail } from "../controllers/contact.controller.js";
const router = express.Router();

router.post("/", Sendemail);
export default router;
