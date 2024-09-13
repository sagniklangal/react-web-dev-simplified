// import React from 'react'

// const Product = () => {
//   const obj = {
//     title: "Moto g84",
//     brand: "Motorola",
//     price: 19000
//   }
//   return (
//     <div>
//       <h2>Mobile name = {obj.title}</h2>
//       <h3> Mobile brand = {obj.brand}</h3>
//       <h4> Mobile price = {obj.price}</h4>
//     </div>
//   )
// }

// export default Product


// import React from 'react'

// const Product = (props) => {
//   return (
//     <div>
//       <h2>Mobile Name = {props.title}</h2>
//       <h3>Mobile brand = {props.brand}</h3>
//       <h4>Mobile Price = {props.price}</h4>
//       <h3>ROM = {props.rom}</h3>
//       <h3>RAM = {props.ram}</h3>
//       <h3>Camera = {props.camera}</h3>
//       <h4>Finger print = {props.finger}</h4>
//     </div>
//   )
// }

// export default Product


import React from 'react';

const Product = ({title, brand, price, rom, ram, fingerprint, camera}) => {
  return (
    <div>
      <h2>Mobile Name = {title}</h2>
      <h3>Mobile brand = {brand}</h3>
      <h4>Mobile Price = {price}</h4>
      <h3>ROM = {rom}</h3>
      <h3>RAM = {ram}</h3>
      <h3>Camera = {camera}</h3>
      <h4>Finger print = {fingerprint}</h4>
    </div>
  );
};

export default Product