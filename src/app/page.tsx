"use client"
import Image from 'next/image'
import styles from './page.module.css'
import TypewriterEffect from "./components/TypewriterEffect"
import {useState} from "react"

type TypewriterEffectProps = {
  sampleText?: string;
  typingDelay?: number;
}

export default function Home() {
  const [start, setStart] = useState<boolean>(false);
  const [displayedText, setDisplayedText] = useState<string>("");
  const sampleTest:string = "Note that, the boolean Boolean is different from the lower case boolean type. The upper case Boolean is an object type whereas lower case boolean is a primitive type. It is recommended to use the primitive type boolean in your code, because, while JavaScript coerces an object to its primitive type, the TypeScript type system does not. TypeScript treats it like an object type."
 
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("click",start)
  setStart(!start)
  }
  
  const handleClickReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    setDisplayedText("")
    setStart(false)
  }
  return (
    <div>
      <div>
        <button onClick={handleClick}>{start ? `Stop Generating` : `Start Generating`}</button>
        <button onClick={handleClickReset}>Reset</button>
      </div>
      <TypewriterEffect sampleText={sampleTest} typingDelay={100} start={start} displayedText={displayedText} setDisplayedText={setDisplayedText} />

    </div>
  )
}
