import React from 'react';
import { Home } from './Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Main from './Main';
import { CartProvider } from 'react-use-cart';
import Cart from './Cart';


export default function App() {
   
    return (
        <>
            <CartProvider>
                <Main />
                <Cart />
            </CartProvider>
        </>
  )
}
