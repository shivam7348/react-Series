import {  useState } from 'react'
import './App.css'

function App() {
  const [Value, setValue] = useState(1)
  const [ multipliesValue, setMultipledValue] = useState(1)
  
  function multiplyByfive() {
    setMultipledValue(Value * 5 )
    setValue( Value +  1)
    
   }
   

  return ( 
    <>
      <h1> Main Value {Value}</h1>
      <button onClick={multiplyByfive}>Click to multiply by 5</button>
      <h2> Multiplied Value {multipliesValue}</h2>
    </>
  )
} 

export default App
