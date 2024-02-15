import { Header } from '@/components/header'
import { Decoder } from '../components/decoder'
import { Encoder } from '../components/encoder'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Alphabet } from '@/components/alphabet'

export default function Home() {
  return (
    <div className="grid h-screen grid-cols-1 grid-rows-[auto_1fr_auto] gap-4 ">
      <Header />

      <div className="mx-auto flex max-w-5xl flex-col gap-8 p-2">
        <section>
          <h1 className="text-xl font-medium text-slate-800">About morse code</h1>

          <p className="text-slate-700">
            Developed by Samuel Morse and Alfred Vail in the 1830s, it&apos;s a method of transmitting information through varied signals. Morse code is a communication system using dots and dashes to represent letters, numbers, and symbols. It has been utilized in telegraphy, radio communication, and signaling, proving its versatility.
            If you wanna learn morse code I highly recommend the
            {' '}
            <Link target="_blank" className="text-slate-500 underline decoration-slate-300 transition-all hover:text-slate-700 hover:decoration-slate-700" href="https://morse.withgoogle.com/learn/">Hello Morse from google</Link>
            .
          </p>
        </section>

        <section>
          <h2 className="font-medium text-slate-800">Morse Encoder</h2>
          <Encoder />
        </section>

        <section>
          <h2 className="font-medium text-slate-800">Morse Decoder</h2>
          <p className="text-slate-700">Valid character= . - /</p>
          <Decoder />
        </section>

        <Alphabet />

      </div>

      <Footer />
    </div>
  )
}
