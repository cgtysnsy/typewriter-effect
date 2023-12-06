"use client"
import React, { useState, useEffect } from 'react'
import { text } from 'stream/consumers';

type TypewriterEffectProps = {
    sampleText: string;
    start: boolean
    displayedText?: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ sampleText, start, displayedText,setDisplayedText,currentIndex,setCurrentIndex }) => {
  
console.log(currentIndex,"typepage")
        useEffect(() => {
            let interval: NodeJS.Timeout | number;
            
            if (sampleText && sampleText.length > 0 && currentIndex< sampleText.length && start == true) {
             
                interval = setInterval(() => {
                    setDisplayedText((prev:any) => prev + sampleText[currentIndex]);
                    setCurrentIndex((prevIndex) => prevIndex + 1)
                 }, 10)
                  
                    return () => clearInterval(interval);
                }
},[currentIndex,start])

  return (
      <div>
      <p>{displayedText}</p>
    </div>
  )
}

export default TypewriterEffect
