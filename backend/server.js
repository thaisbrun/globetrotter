//Création server

const express = require("express")
const {urlencoded} = require("express");
const port = 5000
const app = express();

//Permet traiter données de la req
app.use(express.json)
app.use(urlencoded({ extended: false }))

app.use("/post", require("./routes/post.routes"));
app.listen(port, () => console.log("Le serveur fonctionne et a démarré au port " + port));