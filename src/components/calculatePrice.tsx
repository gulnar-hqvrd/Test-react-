import React, { useState } from 'react'
const item_price = 5
export default function CalculatePrice() {
    const[counter , Setcounter] = useState(1)

    const handleClick = ()=>{
        Setcounter(counter + 1 )
    }

    const price = counter * item_price
  return (
    <div className='container'> 
    <button onClick={handleClick} >Add element</button>
    <br />
    <p>Item Price : {item_price}</p>
    <p>Counter : {counter}</p>
    <p>Total Price : {price}</p>
    </div>
  )
}
