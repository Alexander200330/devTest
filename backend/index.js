import express from "express";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";
import orderBookRoutes from "./routes/orderBookRoutes.js";

const app = express();
app.use(express.json())

dotenv.config();

conectarDB();

//Routing
app.use("/api/orderbooks", orderBookRoutes)

const PORT = process.env.PORT || 4000

const servidor = app.listen(PORT, () => {
    console.log(`Corriendo servidor en el puerto ${PORT}`);
})

