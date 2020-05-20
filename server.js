var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [
    {
        id: "",
        name: "",
        email: "",
        phone: ""
    }
]

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/reservationForm", function(req,res){
    res.sendFile(path.join(__dirname, "reservationForm.html"));
})

app.get("/reservationViews", function(req,res){
    res.sendFile(path.join(__dirname, "reservationViews.html"));
})

app.get("/api/tables", function(req, res){
    return res.json(tables);
})

app.get("/api/tableform", function(req,res){
    var newTable = req.body;
    console.log(newTable);
    tables.push(newTable);
    res.json(newTable);
})

app.listen(PORT,function(){
    console.log("App listening on PORT " + PORT);
});