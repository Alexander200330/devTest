import express from "express";

const app = express();

app.listen(4000, () => {
    console.log("Corriendo servidor en el puerto 4000");
})