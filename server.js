// Dependencies
var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Reservations (DATA)
var tableid = 0;
var waitid = 0;
var waitlist = [
    {
        id: waitid,
        name: "",
        email: "",
        phone: "" 
    }
]

var tables = [
    {
        id: tableid,
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

app.get("/api/waitlist", function(req, res){
    return res.json(waitlist);
})

app.get("/api/tableform", function(req,res){
    var newTable = req.body;
    console.log(newTable);
    tables.push(newTable);
    res.json(newTable);
})

app.post("/api/tables/reservation", function(req, res) {
    var request = req.body;
    if (tables.length < 5){
        tables.push(request);
        res.json(true);
        tableid++;
    }
    else {
        waitlist.push(request);
        res.json(false);
        waitid++;
    }
  });


// Start the server to begin listening


app.listen(PORT,function(){
    console.log("App listening on PORT " + PORT);
});


