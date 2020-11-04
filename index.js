const express = require("express");
const app = express();

const port = 3000;

app.get("/", function(req, res){
    res.json({message : "C'est le chemin"});
})

.get("/help", function(req, res){
    res.json({message : "Dans l'espace, personne ne peut vous entendre crier"});
})

.listen(port, function(){
    console.log("Listenning on http://localhost:" + port);
});