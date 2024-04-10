const express = require("express");

const app = express();
const port = 8000;


app.use(express.urlencoded ({ extended : true })); //standard line //middleware
app.use(express.json());//middleware

app.listen(port,() => {
    console.log(`listening at port ${port}`);
});


app.get("/register",(req,res)=>{
   let {user,password} =  req.query;
   res.send(`standard GET response.Welcome ${user}!`);
   // res.send("standard GET response");
});


app.post("/register",(req,res)=>{
    let {user,password} =  req.body;
   res.send(`standard POST response.Welcome ${user}!`);
    //res.send("standard POST response");
});


