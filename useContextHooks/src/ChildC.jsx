import { useContext } from 'react';
import {data, data1} from './App'
function ChildC() {
    const Firstname = useContext(data);
    const gender = useContext(data1);


  return (
    <>
<h1> Hi my name {Firstname} and my gender {gender}</h1>
    </>
  )
}

export default ChildC