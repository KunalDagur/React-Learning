import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 0

  const addValue = () => {
    counter++
    if (counter <= 20) {
      setCounter(counter)
      console.log("Value : " + counter)
    } else {
      counter = 20
      setCounter(counter)
      alert("Counter can't go above 20")
    }
  }
  const decreaseValue = () => {
    counter--
    if (counter >= 0) {
      setCounter(counter)
      console.log("Value : " + counter)
    } else {
      counter = 0
      setCounter(counter)
      alert("Counter can't go below 0")

    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue} >Add Value</button>
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
