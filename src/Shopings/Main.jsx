import React, { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Cart from './Cart.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Singleblog from './Blogg/Singleblog.jsx'
import Singleproduct from './Singleproduct.jsx'


export const ecomcontext = createContext({})

function Main() {
  const [cart, setCart] = useState([])
  const [isButtonVisible, setIsButtonVisible] = useState(true)
  function handleAddToCart(obj){
    
    if( cart.find(item => obj.id===item.id)) return (cart)
    else{return setCart([...cart, obj])
      
    }
    
  }
  return (
    <>
      <BrowserRouter>
       <ecomcontext.Provider value={{cart, setCart, isButtonVisible, handleAddToCart}}>
         <Header/>
         <Routes>
             <Route path='/' element={<Home/>}></Route>
             <Route path='/cart' element={<Cart/>}></Route>
             <Route path='/blog/:id' element={<Singleblog/>}></Route>
             <Route path='/product/:id' element={<Singleproduct/>}></Route>

         </Routes>
         <Footer />
         </ecomcontext.Provider>
      </BrowserRouter>
    </>
  )
}

export default Main
