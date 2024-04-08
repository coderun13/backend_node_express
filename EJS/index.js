const express = require("express")
const app = express();
const path = require("path");

const port = 8000;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.use(express.static("public"));
//app.use(express.static(path.join(__dirname,"/public")));
app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "/views"));

//root req
app.get("/", (req,res) => {
    res.render("home.ejs");
});

//hello req
app.get("/hello", (req,res) => {
    res.send("hello");
});

//rolldice
app.get("/rolldice", (req,res) => {
    let diceval =  Math.floor(Math.random() *6) + 1;
    res.render("rolldice.ejs",{diceval});
});


//activity : Instagram EJS

app.get("/ig/:username", (req,res) => {
    let {username} = req.params;
    const instaData = require("./data.json");
    const data =  instaData[username];
    console.log(data);
    if(data){
    res.render("instagram.ejs",{data});
    }else{
        res.render("error.ejs");
    }
});   
    

//const followers = ["adam","bob","steve", "abc"];    
//let {username} = req.params;
//console.log(username); //print username on terminal 
// res.render("instagram.ejs",{username,followers});



