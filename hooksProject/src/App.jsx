import { useState } from "react"



function App() {
  
  const [counter, setCounter] = useState(15)
 
  
  const addValue = function(){
    setCounter(counter + 1)
  }
  const removeValue = () => {
    setCounter(counter - 1)
  } 
  return (
    <>
    <h1>shivam aur code </h1>
    <h1>Hitesh code: {counter}</h1>


    <button onClick={addValue}>AddButton</button>
    <button onClick={removeValue}>RemoveButton</button>
    </>
  )
}
 export default App