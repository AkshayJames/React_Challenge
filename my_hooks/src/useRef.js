import React,{useRef,useState} from 'react'


function useRef() {
    const inputRef = useRef()

  return (
    <div>
     <input type='text' ref={inputRef}/>   
    
    </div>
  )
}

export default useRef