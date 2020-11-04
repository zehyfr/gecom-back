const express = require("express");
const app = express();

const port = 3000;
//userbalek = "{User{UserID : 12, RoleID}}"

app.get("/", function(req, res){
    res.json({message : "C'est le chemin"});
})

// test
.get("/help", function(req, res){
    res.json({message : "Dans l'espace, personne ne peut vous entendre crier"});
})
// .get("/user/:id", function(req, res){
//     res.json(userbalek);
// })
.listen(port, function(){
    console.log("Listenning on http://localhost:" + port);
});
