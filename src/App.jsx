import React from 'react';
import Person from './Person';
import Test from './components/Test';
import Product from './components/Product';

// const App = () => {
  
//   return (
//     <>
//     <Person />
//     <h1>App is entry point</h1>
//     <Test />

//     <Product />
    
//     </>
//   )
// }

// export default App


const App = () => {
  return (
    <>
    <Product title = "Moto G84" brand = "Motorola" price = {19000} />

    <Product title = "iPhone 16" brand = "Apple" price = {80000} />

    <Product title = "Oneplus 13" brand = "Oneplus" price = {35000} rom = {"128 GB"} ram="8 GB" camera="200 Mp" fingerprint="Yes"/>

    </>
  )
}

export default App