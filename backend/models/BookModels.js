import mongoose from "mongoose";

 const bookSchema=mongoose.Schema({
    name:String,
    title: String,
    price: Number,
    category: String,
    image: String
})

const bookModel = mongoose.model("book",bookSchema)
export default bookModel;