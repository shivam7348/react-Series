import { useState } from 'react'
import './App.css'
import ChildA from './ChildA'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h2> Learning useCallback</h2>
     <ChildA/>
     <h1> {count}</h1>

<button onClick={() => setCount(count + 1)}>Addition</button>     
    </>
  )
}

export default App
