"use client"
import React, { useState } from 'react'
import Slide0 from './slide_0'
import Slide1 from './slide_1'
import Slide2 from './slide_2'
import Slide3 from './slide_3'


const LayoutC19L3A5 = () => {
    const [isFirstSlide,setIsFirstSlide] = useState("Slide_0")
  return (
    <div >
        {isFirstSlide ===  "Slide_0" && <Slide0 isFirstSlide={isFirstSlide} setIsFirstSlide={setIsFirstSlide}/>}
        {isFirstSlide ===  "Slide_1" && <Slide1  setIsFirstSlide={setIsFirstSlide}/>}
        {isFirstSlide ===  "Slide_2" && <Slide2  setIsFirstSlide={setIsFirstSlide}/>}
        {isFirstSlide ===  "Slide_3" && <Slide3 isFirstSlide={isFirstSlide}  setIsFirstSlide={setIsFirstSlide}/>}
      
    </div>
  )
}

export default LayoutC19L3A5
