import React from 'react';
import {useCart} from 'react-use-cart'

export const Home = (props) => {
    const {addItem } = useCart();
    
    return (
        <>
            
        
             <div className='col-11 col-lg-3 col-md-6 mb-5'>
                <div class="card p-0 overflow-auto shadow h-80">
                    <img src={props.img} class="card-img-top img-fluid h-30 text-center" alt={props.name} />
                    <div class="card-body text-center">
                        <h5 class="card-title fw-bold">{props.name}</h5>
                        <h6 class="card-title  text-warning fw-bold">$ {props.price}</h6>
                        <h5 class="card-title">{props.desc}</h5>
                            <button class="btn btn-primary" onClick={()=>{addItem(props.item)}}>Add to Cart</button>
                    </div>
                </div>

            </div>
            
        </>
  )
};
