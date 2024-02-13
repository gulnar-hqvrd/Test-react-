import { log } from "console";
import React, { useState } from "react";

export default function Register() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    phone: "",
    cellPhone: "",
    zipCode: "",
  });

  console.log(user);

  const handleChange = (e:any) =>{
    setUser({...user , [e.target.name ] : e.target.value})
}
  
  return (
    <div className="container">
      <form>
        <input type="text" name="firstname" placeholder="firstname" onChange={handleChange} />
        <input type="text" name="lastName" placeholder="lastName" onChange={handleChange}  />
        <input type="text" name="email" placeholder="email" onChange={handleChange}  />
        <input type="text" name="phone" placeholder="phone" onChange={handleChange} />
        <input type="text" name="cellPhone" placeholder="cellPhone" onChange={handleChange}  />
        <input type="text" name="address" placeholder="address" onChange={handleChange} />
        <input type="text" name="zipCode" placeholder="zipCode" onChange={handleChange}  />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
