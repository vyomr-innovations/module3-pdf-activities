
"use client"
import React, { useState } from 'react'
import FirstScreen from './firstScreen'
import SecoundScreen from './secoundScreen'
import ThirdScreen from './thirdSreen'
import FourthScreen from './fourthScreen'

const LayOutC24L2A4 = () => {
    const [isFirstScreen,setIsfirstScreen] = useState("first")
  return (
    <div className='min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5'>
      {isFirstScreen == "first" && <FirstScreen isFirstScreen={isFirstScreen} setIsfirstScreen={setIsfirstScreen}/>}
      {isFirstScreen == "secoundScreen" && <SecoundScreen isFirstScreen={isFirstScreen} setIsfirstScreen={setIsfirstScreen}/>}
      {isFirstScreen == "ThirdScreen" && <ThirdScreen isFirstScreen={isFirstScreen} setIsfirstScreen={setIsfirstScreen}/>}
      {isFirstScreen == "FourthScreen" && <FourthScreen isFirstScreen={isFirstScreen} setIsfirstScreen={setIsfirstScreen}/>}
    </div>
  )
}

export default LayOutC24L2A4
