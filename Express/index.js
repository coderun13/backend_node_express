const express = require("express");
const app = express();

console.dir(app);

let port = 3000;

app.listen(port, () => {
    
    console.log(`app listening on port ${port}`);// first server/port //localhost:3000

});


app.get("/", (req,res)=> {
    res.send("you contacted root path");// specific route response
});


app.get("/search", (req,res)=> {
    res.send("you contacted search path");// specific route response
});


app.get("/help", (req,res)=> {
    res.send("you contacted help path");// specific route response
});


//app.get("*", (req,res) => {
  //  res.send("this path doesn't exist");//custom route response
//});


app.post("/",(req,res) => {
    res.send("you sent a post request to root");//post request
}); 


app.get("/:username/:id", (req,res) => {
    let { username,id } = req.params;
    //res.send(`welcome to the page of @${username}.`);
    let htmlStr = `<h1>welcome to the page of @${username}.</h1>`
    res.send(htmlStr);
});


app.get("/new",(req,res) => {//query string(?q="")
    //console.log(req.query);
    let {q} = req.query;
    if(!q){
        res.send("<h1>nothing search</h1>");
    }
    res.send(`search results for query: ${q}`);
});


/*app.use((req, res) =>{
    // console.log(req);
   
    console.log("request recieved");//handling request
   
    //res.send("This is a basic response");
   
    /* res.send({
        name: "Snehal",
        Age: "19",
    })

    let code = "<h1>Info</h1> <ul><li>Name: Snehal</li> <li>Role: Programmer</li></ul>"
    res.send(code);
});*/


