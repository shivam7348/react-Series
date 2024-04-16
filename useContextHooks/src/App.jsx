import { createContext } from "react";
import ChildA from "./ChildA";
// imp create, provider, useContext
const data = createContext()
const data1 = createContext()
const data3 = createContext()
function App () {

    const name = "HArry"
    const gender = "Male"
    const arr = "SHiva"
        
   
    return (
    <> 
    <data.Provider value = {name}>
        <data1.Provider value ={gender}>
            <data3.Provider value = {arr}>
                <ChildA/>       
            </data3.Provider>
        

        </data1.Provider>
    </data.Provider>
   
    </>
    )
}
export default App;
export {data, data1, data3}