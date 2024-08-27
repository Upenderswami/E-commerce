import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { ecomcontext } from './Main'

function Singleproduct(props) {
    const { handleAddToCart } = useContext(ecomcontext)
    const { id } = useParams()
    const [singleProd, setProduct] = useState([])

    useEffect(() => {
        async function FetchProduct() {
            const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
            console.log(res.data);
            setProduct(res.data)
        }
        FetchProduct()
    }, [])

    return (
        <div id='section'>
            <div className='picture'>
                <img src={singleProd.image} alt="" />
            </div>
            <div className='text'>
                <h3>{singleProd.title}</h3>
                <p>{singleProd.description}</p>
                <p>${singleProd.price}</p>
                <Link className='btn' to={``} onClick={() => handleAddToCart(singleProd)}>Add To Cart</Link>
            </div>
        </div>
    )
}

export default Singleproduct
