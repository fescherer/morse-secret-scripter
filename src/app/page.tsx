import { Header } from '@/components/header'
import { Decoder } from '../components/decoder'
import { Encoder } from '../components/encoder'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="grid h-screen grid-cols-1 grid-rows-[auto_1fr_auto] gap-4">
      <Header />

      <div className="flex flex-col gap-8">
        <h1>About morse code</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis delectus aut tenetur quia, eveniet, quae culpa quibusdam porro et quas, tempora reprehenderit enim? Dolorum illo alias libero harum, perspiciatis aliquid?</p>

        <section>
          <h2>Morse Encoder</h2>
          <Encoder />
        </section>

        <section>
          <h2>Morse Decoder</h2>
          <span>Obs. valid character= . - /</span>
          <Decoder />
        </section>
      </div>

      <Footer />
    </div>
  )
}
