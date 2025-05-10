
"use client"
import React, { useState } from 'react'
import FirstScreen from './firstScreen'
import SecoundScreen from './secoundScreen'
import ThirdScreen from './thirdSreen'

const LayoutC23L3A5 = () => {
   const [isFirstScreen,setIsfirstScreen] = useState("first")
    return (
      <div className='min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5'>
        {isFirstScreen == "first" && <FirstScreen isFirstScreen={isFirstScreen} setIsfirstScreen={setIsfirstScreen}/>}
        {isFirstScreen == "secoundScreen" && <SecoundScreen isFirstScreen={isFirstScreen} setIsfirstScreen={setIsfirstScreen}/>}
        {isFirstScreen == "ThirdScreen" && <ThirdScreen isFirstScreen={isFirstScreen} setIsfirstScreen={setIsfirstScreen}/>}
      </div>
    )
}

export default LayoutC23L3A5
