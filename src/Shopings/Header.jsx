import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ecomcontext } from './Main'


// function Header(props) {
function Header(){
   const {cart} = useContext(ecomcontext)
  return (
    <header className="head"> 
            <h1>Ecommerce</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    {/* <Link to="/cart">Cart <span>{props.cartBhejo.length}</span></Link>   Prop drilling */}
                    <Link to="/cart">Cart <span>{cart.length}</span></Link>
                </li>
            </ul>

         </header>
  )
}

export default Header
