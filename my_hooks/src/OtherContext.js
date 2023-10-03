import React,{useContext} from 'react'
import { appContext } from './useContext'


function OtherContext() {
    const {data,setdata} = useContext(appContext)
  return (
    <div>
        <button onClick={()=>setdata(data+1)}>Increment</button>
        <button onClick={()=>setdata(data-1)}>Decrement</button>
    </div>
  )
}

export default OtherContext