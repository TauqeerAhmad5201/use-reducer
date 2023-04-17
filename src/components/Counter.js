import React, { useReducer } from 'react'

const initialstate = 0; 
const reducer = (currentstate, action)=> {
  console.log(currentstate)
  switch(action){
    case "Increment" :
      return currentstate + 1 

    case "Decrement" :
      return currentstate
    default : 
      return currentstate
  }
  
}
export default function Counter() {
  const [count, dispatch] = useReducer(reducer, initialstate)
  return (
    <div>
      <div>count = {count}</div>
      <button onClick={()=> dispatch("Increment")}>Increment</button>
      <button onClick={()=> dispatch("Decrement")}>Decrement</button>    
    </div>
  )
}
