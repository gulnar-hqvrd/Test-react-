import { log } from "console";
import React, { useState } from "react";

export default function Userinfo() {
    const [user , setUser] = useState({
        name:"",
        age : 23 ,
        email : "sdsdsd"
    })

    console.log(user);

    const handleChange = (e : any) => {
        setUser({...user , name:e.target.value}) 
    }
    
  return(
    <>
    <div className="container">
        <form>
            <input type="text" placeholder="Write your name" onChange={handleChange} />
        </form>
    </div>
    </>
  );
}
