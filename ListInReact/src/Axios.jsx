import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

function Axios() {
    const [userData,setData] = useState([])
    useEffect(()=> {
        axios.get("https://api.github.com/users/shivam7348")
        .then((response)=> {
            console.log(response);
            setData(response.data)
        })
    },[])
  return (
    <div>Axios
        {userData.map((data) =>{
            return (
                <div>{data.name}</div>
            )
        })}
    </div>
  )
}

export default Axios