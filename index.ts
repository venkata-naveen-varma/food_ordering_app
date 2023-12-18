import express from "express";


const app = express();

app.use("/", (req, res)=>{
    return res.json("Hello");
});


app.listen(8000, ()=>{
    console.log("Listening on port 8000");
});