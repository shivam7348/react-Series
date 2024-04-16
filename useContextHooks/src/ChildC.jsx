import {data, data1, data3} from './App'

import React, { useContext } from 'react'


function ChildC() {
   const name =  useContext(data)
   const gender = useContext(data1)
   const array = useContext(data3)
  return (
    <>
    <h1> hi my name is {name}, and my gender{gender} {array}</h1>
    </>
  )
}

export default ChildC