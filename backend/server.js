//Création server

const express = require("express")
const port = 5000
const app = express();

app.listen(port, () => console.log("Le serveur fonctionne et a démarré au port " + port));