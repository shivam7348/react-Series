import { useState } from 'react'
import './App.css'
// props are  the  read only 
function App() {
const [name, setName ]= useState("")
const [paswd, setPaswd ]= useState("")

  function handleChange(e){
  // console.log(e.target.value);
 if(e.target.name == "firstName") {
  const capName = (e.target.value).toUpperCase()
  setName(capName)
 }else{
  setPaswd(e.target.value)
 }

  }
 

  return (
    <>
      <form>
        <label > First Name:</label> <br />
        <input type="text" name="firstName" value={name} onChange={handleChange} /> <br />
        <label > Password:</label> <br />
        <input type="text" name="paswoord" value={paswd} onChange={handleChange} /> <br />
      </form>
    </>
  )
}
export default App
