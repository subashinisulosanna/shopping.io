import React from 'react';
import { Home } from './Home';
import data from './data'

export default function Main() {
    const { Product } = data;
    return (
        <>
            <h3 class='text-center fw-bold mb-5 mt-4 heading'>A SMALL SHOPPING CART</h3>
            <div className='row justify-content-center'>
            {
                Product.map((item, index) => {
                    return <Home img={item.img} desc={item.desc} name={item.name} price={item.price} item={item} key={index}/>
                })
            }
            </div>
        </>
  )
}
