import { useMemo } from "react"
import { useState } from "react"

  function App() {
    const [add, setadd] = useState(0)
    const [minus, setminus] = useState(100)

    const multiplication = useMemo(function multiply() {
      console.log("****&*");
      return add *10
    }, [add])

   
    return (
      <>
      <h1> Learning UseMemo</h1>
      { multiplication} <br />
      <button onClick={() => setadd(add + 1)} >AddValue</button>
      <span>{add}</span>
      <br />
      <br />
      <button onClick={() => setminus(minus - 1)}>SubValue</button>
      <span>{minus}</span>
      </>
    )
  }

  export default App