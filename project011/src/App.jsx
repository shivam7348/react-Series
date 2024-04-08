import { useRef, useState } from 'react'

function App() {

const refElement = useRef("");
const [name, setName ] = useState("Shivam")
console.log(refElement)

function Reset() {
  setName("")
  refElement.current.focus()
}

function handleInput() {
  refElement.current.style.color= "blue"
  refElement.current.value = "Arvind"
}


  return (
    <>  
      
      <h1> learnig REf</h1>
       
       <input ref={refElement} type='text' value={name} onChange={(e) => {
        setName(e.target.value)
       }}></input>
       <button onClick={Reset}>Reset</button>
       <button onClick={handleInput}>handleinput</button>
       
    </>
  )
}

export default App


// use Ref is use for updating our dom and style its shows the current value init 
