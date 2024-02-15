'use client'

import { useState } from 'react'
import { TextArea } from './textarea'

const dictionary: { [code: string]: string } = {
  'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--', 'z': '--..', ' ': '/', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
}

export function Encoder() {
  const [text, setText] = useState('')

  function handleEncoder(rawText: string) {
    const parsedText = rawText.split('').map(letter => dictionary[letter.toLowerCase()])
    setText(parsedText.join(' '))
  }

  return (
    <div className="flex flex-col justify-between gap-4 md:flex-row">
      <TextArea label="Your words" name="" id="" placeholder="Type here what you want to encode to morse" onChange={e => handleEncoder(e.target.value)} />
      <TextArea label="Your encrypted words" name="" id="" placeholder="result" value={text} disabled />
    </div>
  )
}
