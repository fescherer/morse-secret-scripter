import { Header } from '@/components/header'
import { Decoder } from '../components/decoder'
import { Encoder } from '../components/encoder'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="grid h-screen grid-cols-1 grid-rows-[auto_1fr_auto] gap-4 bg-slate-100">
      <Header />

      <div className="mx-auto flex max-w-5xl flex-col gap-8 p-2">
        <section>
          <h1 className="text-xl font-medium text-slate-800">About morse code</h1>
          <p className="text-slate-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis delectus aut tenetur quia, eveniet, quae culpa quibusdam porro et quas, tempora reprehenderit enim? Dolorum illo alias libero harum, perspiciatis aliquid?</p>
        </section>

        <section>
          <h2 className="font-medium text-slate-800">Morse Encoder</h2>
          <Encoder />
        </section>

        <section>
          <h2 className="font-medium text-slate-800">Morse Decoder</h2>
          <p className="text-slate-700">Obs. valid character= . - /</p>
          <Decoder />
        </section>
      </div>

      <Footer />
    </div>
  )
}
