const express = require("express");
const app = express();
//const bdd = require("./bdd");


app.use(express.urlencoded({
    extended : true}
))

const PORT = process.env.PORT || 3000;

app.get('/users', function(req, res){
    res.json([
        {
            id : 1,
            mail : "john.doe@gmail.com",
            name : "John",
            surname : "Doe",
            role : {
                id : 1,
                name : "public"
            },
            company : null
        },
        {
            id : 2,
            mail : "jane.doe@gmail.com",
            name : "Jane",
            surname : "Doe",
            role : {
                id : 2,
                name : "pro"
            },
            company : {
                id : 1,
                name : "JD BTP",
                tel : "02.51.37.45.92"
            }
        }
    ])
    
})
.get('/user/:id', function(req, res){
    res.json(
        {
            id : 1,
            mail : "john.doe@gmail.com",
            name : "John",
            surname : "Doe",
            role : {
                id : 1,
                name : "public"
            },
            company : null
        })
})
.post('/user', function(req, res){
    res.send(req.body.name)
})
// .get('/projects', bdd.listProjects)
// .get('/project/:id', bdd.getProject)
// .post('/project', bdd.addProject)
// .get('/comments/:id', bdd.listComments)
// .post('/comment', bdd.addComment)

.listen(PORT, function(){
    console.log("Listenning on http://localhost:" + PORT);
});
