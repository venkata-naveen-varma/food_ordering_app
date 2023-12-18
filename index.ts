import express from "express";
import AdminRoute from "./routes/AdminRoute";
import VandorRoute from "./routes/VandorRoute";

const app = express();

app.use("/admin", AdminRoute);
app.use("/vandor", VandorRoute);


app.listen(8000, ()=>{
    console.log("Listening on port 8000");
});