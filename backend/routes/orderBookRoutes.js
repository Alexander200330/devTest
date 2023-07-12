import express from "express";
import { creandoOrderBook, obtenerOrderBook } from "../controllers/orderBookController.js";

const router = express.Router();

router.get("/", obtenerOrderBook)

router.post("/", creandoOrderBook)
export default router;