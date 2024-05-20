import express from "express";
import bookModel from "../models/BookModels.js";


 export const getBook=async(req,res)=>{
    try {
        const book=await bookModel.find();
res.status(200).json(book);

    } catch (error) {
        console.log(error,"something wrong in book controllers")
    }
 }

export const createBook=async(req,res)=>{
try {
    const {name,title,price,category,image}=req.body;
    const newBook=new bookModel({
        name,title,price,category,image
    })
    const savedBook=await newBook.save()
    res.status(201).json(savedBook);

} catch (error) {
    console.log("error creating book",error)
    res.status(500).json({message:"an error occured in book controllers "})
}
}