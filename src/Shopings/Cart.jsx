import React, { useContext, useState } from 'react'
import { ecomcontext } from './Main'
import { MdDelete } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";

const Cart = () => {
  const { cart, setCart } = useContext(ecomcontext)
  const [count, setCount] = useState(1)

    function incre(){
        setCount(count + 1)
    }
    function decre(){
        if(count>1){
            setCount(count - 1)
        }
        
    } 
    function deleteTask(e, id){
      const indexToDlete = cart.findIndex((item)=> {
        return item.id === id})
      setCart(cart.filter((item, index) => {
        return index !== indexToDlete
    }))

    }
  return (
  
      // {/* // console.log(cart) */}
      cart.map((item) => { return(
         <div className='all'>
          <div className='left'>
            <img src={item.image} alt="" />
          </div>
          <div className='right'>
            <h2>{item.title}</h2>
            {/* <p>{item.description}</p> */}
            <p>Price: ${item.price}</p>
            <button>Buy Now </button> <span><MdDelete onClick={(e) => deleteTask(e, item.id)} /></span>
          </div>
          <div className='exright'>
               <IoIosArrowUp onClick={incre} />
               <div>{count}</div>
               <MdKeyboardArrowDown onClick={decre}/>
          </div>
         </div>
      )})
    
   
  )
}

export default Cart
