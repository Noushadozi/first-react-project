import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Device from './components/Device/Device'
import Watch from './components/Watch/Watch'
import Knob from './components/Knob/Knob'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Knob ></Knob>
      <Device name="tesla phone" price="trillion"></Device>
      <Device name="smasng" price="billion"></Device>
      <Watch></Watch>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
