import { useState } from 'react'
 

function App() {
   const [color,setColor] = useState("olive");

  return (
    <>
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
            <button className='outline-none px-4 py-1 rounded-2xl shadow-lg text-2xl'
            style={{background:'red'}}
            onClick={() => setColor("red")}>
              Red
            </button>

            <button className='outline-none px-4 py-1 rounded-2xl shadow-lg text-2xl'
            style={{background:'brown'}}
            onClick={() => setColor("brown")}>
              Brown
            </button>

            <button className='outline-none px-4 py-1 rounded-2xl shadow-lg text-2xl'
            style={{background:'pink'}}
            onClick={() => setColor("pink")}>
              Pink
            </button>

            <button className='outline-none px-4 py-1 rounded-2xl shadow-lg text-2xl'
            style={{background:'orange'}}
            onClick={() => setColor("orange")}>
              Orange
            </button>

            <button className='outline-none px-4 py-1 rounded-2xl shadow-lg text-2xl'
            style={{background:'blue'}}
            onClick={() => setColor("blue")}>
              Blue
            </button>

            <button className='outline-none px-4 py-1 rounded-2xl shadow-lg text-2xl'
            style={{background:'yellow'}}
            onClick={() => setColor("yellow")}>
              Yellow
            </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
