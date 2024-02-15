'use client'

import { useState } from 'react'

const dictionary: { [code: string]: string } = {
  '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e', '..-.': 'f', '--.': 'g', '....': 'h', '..': 'i', '.---': 'j', '-.-': 'k', '.-..': 'l', '--': 'm', '-.': 'n', '---': 'o', '.--.': 'p', '--.-': 'q', '.-.': 'r', '...': 's', '-': 't', '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x', '-.--': 'y', '--..': 'z', '/': ' ', '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9', '-----': '0',
}

export function Decoder() {
  const [text, setText] = useState('')

  function handleEncoder(rawText: string) {
    const parsedText = rawText.split(' ').map(letter => dictionary[letter.toLowerCase()])
    console.log(parsedText, rawText)
    setText(parsedText.join(''))
  }

  return (
    <div className="flex justify-between">
      <textarea name="" id="" placeholder="Type here what you want to encode to morse" onChange={e => handleEncoder(e.target.value)} />
      <textarea name="" id="" placeholder="result" value={text} disabled />
    </div>
  )
}
