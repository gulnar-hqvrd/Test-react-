import React, { useEffect, useState } from 'react'

interface Product {
    title:string,
    description:string,
    category:string , 
    price:number,
    image:string,
}


export default function InitialState() {

    const [product , setProduct] = useState<Product | null>(null)

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/3").then((json)=>json.json().then( (data)=>setProduct(data)))        
    })
  return (
    <div className='container'>
            <h1>{product?.title}</h1>
            <p>{product?.description}</p>
            <p>{product?.category}</p>
            <p>{product?.price}</p>
            <img src={product?.image} alt={product?.title} />
    </div>
  )
}
