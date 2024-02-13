import React from "react";

const FirstComponents = ({
    firstname ,
    lastname
} :{
    firstname : string,
    lastname : string,
}) => {
    return (
        <>
        <div>
            <h1>Salam , {firstname} {lastname}</h1>
        </div>
        </>
    )
}

export default FirstComponents



export const SecondComponents: React.FC<{
firstname : string,
lastname?:string,
}> = ({firstname , lastname}) =>{
    return (
        <>
        <div>
            Hello , {firstname} {lastname}
        </div>
        </>
    )
}
type ThirdComponents = {
    firstname? : string ,
    lastname : string
}

export const ThirdComponents:React.FC<ThirdComponents> = ({
    firstname , lastname
}) =>{
    return(<>
      <div>
            Hello , {firstname} {lastname}
        </div>
    </>)
}