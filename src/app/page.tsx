export default function Home() {
  return (
    <div>
      <h1>About morse code</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis delectus aut tenetur quia, eveniet, quae culpa quibusdam porro et quas, tempora reprehenderit enim? Dolorum illo alias libero harum, perspiciatis aliquid?</p>

      <section>
        <h2>Morse Encoder</h2>
        <textarea name="" id="" placeholder="Type here what you want to encode to morse" />
      </section>

      <section>
        <h2>Morse Decoder</h2>
        <span>Obs. valid character= . - /</span>
        <textarea name="" id="" placeholder="Type here what you want to decode to morse" />
      </section>
    </div>
  )
}
