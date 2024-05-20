import mongoose, { mongo } from "mongoose"
import express from "express";
import {getBook, createBook } from "./controllers/BookControllers.js";

const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("response ");
})

mongoose.connect("mongodb://127.0.0.1:27017", {
    dbName:"practiceStore"
}).then(()=>{
    console.log("db connected")
}).catch(()=>{
    console.log("db error")
})

app.get("/book/getbook",getBook)
app.post("/book/createBook",createBook)


app.listen(4040,()=>{
    console.log("backend started ")
})