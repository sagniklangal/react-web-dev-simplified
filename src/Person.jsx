import React from 'react'
import { Superman } from './Superman';


const Person = () => {
  const name = "Sagnik Langal";
  const age = 23;

  const person = {
    name: "Sagnik",
    age: 23,
    email: "abc@gmail.com",
    pin: 700007
  }
  const product = {
    title: "iPhone",
    model: "iphone-15",
    price: 60000
  }
  return (
    <>
    <div>
    {/* <h1>{name}</h1>
    <p>age = {age}</p>
    <h2>React</h2>
    <h3>I am learning react</h3>
    <h1>2+4</h1>
    <h1>{2/4}</h1> */
    }
    <h1>Name = {person.name}</h1>
    <h1>Age = {person.age}</h1>
    <h1>email = {person.email}</h1>
    <h1>pin = {person.pin}</h1>
  </div>
  <Superman/>
  <div>
    <h3>title = {product.title}</h3>
    <h3>model = {product.model}</h3>
    <h4>price ={product.price}</h4>
  </div>
  </>
  )
}

export default Person