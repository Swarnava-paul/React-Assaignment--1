import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p >Parent</p>
     <div style={{backgroundColor:"red"}}>1</div>
     <div style={{backgroundColor:"yellow"}}>2</div>
     <div style={{backgroundColor:"green"}}>3</div>
     <div style={{backgroundColor:"violet"}}>4</div>
    </>
  )
}

export default App
