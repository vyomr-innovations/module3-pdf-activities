
"use client"
import React, { useState } from 'react'
import FirstScreen from './firstScreen'
import SecoundScreen from './secoundScreen'

const LayoutC23L3AA = () => {
   const [isFirstScreen,setIsfirstScreen] = useState("first")
    return (
      <div className='min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5'>
        {isFirstScreen == "first" && <FirstScreen isFirstScreen={isFirstScreen} setIsfirstScreen={setIsfirstScreen}/>}
        {isFirstScreen == "secoundScreen" && <SecoundScreen isFirstScreen={isFirstScreen} setIsfirstScreen={setIsfirstScreen}/>}
      </div>
    )
}

export default LayoutC23L3AA
