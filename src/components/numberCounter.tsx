import React, { useState } from "react";

export default function NumberCounter() {
    const [counter , setCounter] = useState(0)
   const handleClick = ()=>{
    setCounter(counter + 1)
   }
  return (
    <>
      <div className="container">
        <h2>Number Counter</h2>
        <>Counter : {counter} </>
        <br />
        <button onClick={handleClick}>Incerease</button>
      </div>
    </>
  );
}
