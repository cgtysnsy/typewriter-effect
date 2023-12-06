"use client"
import React, { useState, useEffect } from 'react'
import { text } from 'stream/consumers';

type TypewriterEffectProps = {
    sampleText: string;
    start: boolean
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ sampleText, start, displayedText,setDisplayedText }) => {
   const [currentIndex,setCurrentIndex] = useState<number>(0)

        useEffect(() => {
            let interval: NodeJS.Timeout | number;
            
            if (sampleText && sampleText.length > 0 && currentIndex< sampleText.length && start == true) {
             
                interval = setInterval(() => {
                    setDisplayedText((prev) => prev + sampleText[currentIndex]);
                    setCurrentIndex((prevIndex) => prevIndex + 1)
                 }, 10)
                  
                    return () => clearInterval(interval);
                }
},[currentIndex,typingDelay,start])

  return (
      <div>
      <p>{displayedText}</p>
    </div>
  )
}

export default TypewriterEffect
