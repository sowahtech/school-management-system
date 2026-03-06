import mongoose from "mongoose";

mongoose.connect("mongodb+srv://username:password@cluster0.xb5faiq.mongodb.net/test")
.then(()=>console.log("Connected"))
.catch(err=>console.log(err))