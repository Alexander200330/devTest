import express from "express";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";
import orderBookRoutes from "./routes/orderBookRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json())

dotenv.config();

conectarDB();

// configurar cors
const whiteList = ["http://localhost:5173"];

const corsOptions = {
    origin: function(origin, callback){
        if(whiteList.includes(origin)){
            // Está permitido
            callback(null, true);
        } else{
            // No está permitido
            callback(new Error("Error de cors"));
        }
    }
}

app.use(cors(corsOptions));

//Routing
app.use("/api/orderbooks", orderBookRoutes)

const PORT = process.env.PORT || 4000

const servidor = app.listen(PORT, () => {
    console.log(`Corriendo servidor en el puerto ${PORT}`);
})

