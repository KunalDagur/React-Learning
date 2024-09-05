import { useState } from 'react'



function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-1000"
      style={{ backgroundColor: color }}>

      <div className='fixed flex flex-wrap justify-center bottom-[5rem] inset-x-0 px-2 py-3'>
        <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
          <button
            onClick={() => setColor("red")}
            className='outline-none px-10 py-3 rounded-3xl text-white shadow-xl'
            style={{ backgroundColor: "red" }}>Red</button>
          <button
            onClick={() => setColor("blue")}
            className='outline-none px-10 py-3 rounded-3xl text-white shadow-xl'
            style={{ backgroundColor: "blue" }}>Blue</button>
          <button
            onClick={() => setColor("violet")}
            className='outline-none px-10 py-3 rounded-3xl text-white shadow-xl'
            style={{ backgroundColor: "violet" }}>Violet</button>
          <button
            onClick={() => setColor("green")}
            className='outline-none px-10 py-3 rounded-3xl text-white shadow-xl'
            style={{ backgroundColor: "green" }}>Green</button>
          <button
            onClick={() => setColor("yellow")}
            className='outline-none px-10 py-3 rounded-3xl text-orange shadow-xl'
            style={{ backgroundColor: "yellow" }}>Yellow</button>
          <button
            onClick={() => setColor("olive")}
            className='outline-none px-10 py-3 rounded-3xl text-white shadow-xl'
            style={{ backgroundColor: "olive" }}>Olive</button>
          <button
            onClick={() => setColor("orange")}
            className='outline-none px-10 py-3 rounded-3xl text-red shadow-xl'
            style={{ backgroundColor: "orange" }}>Orange</button>
          <button
            onClick={() => setColor("pink")}
            className='outline-none px-10 py-3 rounded-3xl text-black shadow-xl'
            style={{ backgroundColor: "pink" }}>Pink</button>
          <button
            onClick={() => setColor("purple")}
            className='outline-none px-10 py-3 rounded-3xl text-white shadow-xl'
            style={{ backgroundColor: "purple" }}>Purple</button>
          <button
            onClick={() => setColor("lavender")}
            className='outline-none px-10 py-3 rounded-3xl text-black shadow-xl'
            style={{ backgroundColor: "lavender" }}>Lavender</button>
        </div>
      </div>

    </div>
  )
}

export default App
