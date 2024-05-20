import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from './Card'


const Home = () => {
    const [book,setbook]=useState([])
    useEffect(()=>{
const getData=async()=>{
    try {
   const res = await axios.get("http://localhost:4040/book/getbook")
   setbook(res)

    } catch (error) {
        console.log("an error in frontend ",error)
    }

} 
getData()
    },[])

  return (
    <>
     {
      book.map((item)=>{
        return (
          <Card key={item.id} item={item}  />
        )
      })
     }
    </>
  )
}

export default Home