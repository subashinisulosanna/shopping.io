import React from 'react';
import { useCart } from 'react-use-cart';
import './App.css'
export default function Cart() {
    const { isEmpty, addItem, totalItems, totalUniqueItems, items, updateItemQuantity, removeItem, emptyCart, cartTotal } = useCart();
    if (isEmpty) {
        return <div className='text-center text-success fw-bold'><h1>Cart is Empty</h1></div>
    }
    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <h3 className='text-danger fw-bold m-4 text-center'>Cart ({totalUniqueItems}) : Total Items ({totalItems}) </h3>
                    <table className="table table-light table-hover m-0 table-responsive">
                        <tbody className='fw-bold'>
                            {
                            items.map((val, index) => {
                                return (
                                    <tr key={index}>
                                        <td key={index}>
                                            <img className='m-3' src={val.img} style={{height:"4rem",width:"5rem"}}></img>
                                        </td>
                                        <td className='text-center m-3 top'>
                                            {val.name}
                                        </td>
                                        <td className='text-center m-3'>
                                           $ {val.price}
                                        </td>
                                        <td className='text-center m-3'>
                                           Quantity ({val.quantity})
                                        </td>
                                        <td>
                                            <button className='btn btn-success margin' onClick={()=>{updateItemQuantity(val.id,val.quantity+1)}}>+</button>
                                        <button className='btn btn-info margin' onClick={() => {
                                            updateItemQuantity(val.id,val.quantity-1)
                                        }}> - </button>
                                        <button className='btn btn-danger margin' onClick={() => {
                                            removeItem(val.id)
                                        }}>Remove</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                        
                    </table>
                    
                </div>
                <div className='right'>
                    <h5 className='fw-bold float-right'>Total Price : $ {cartTotal}</h5>
                    <button className='btn btn-danger m-3 ml-5 fw-bold' onClick={() => {
                        emptyCart()
                     }}>Clear Cart</button>
                     <button className='btn btn-success fw-bold'>Buy now</button> 
                </div>
               
            </div> 
        </>
  )
}
