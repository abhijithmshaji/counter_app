import { useState } from 'react'
import './App.css'
import Counter from './Components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div  style={{width:'100%', height:'100vh'}} className='d-flex justify-content-center align-items-center'>
      <Counter></Counter>
    </div>
  )
}

export default App
