import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { ecomcontext } from "./Main";

function FetchProductAPIs() {
    const { handleAddToCart, isButtonVisible } = useContext(ecomcontext);
    const [products, setProducts] = useState([]);
    const [quantity, setQuantity] = useState(1);

    function handleIncrement() {
        setQuantity(quantity + 1);
    }

    function handleDecrement() {
        if (quantity > 1) setQuantity(quantity - 1);
    }

    useEffect(() => {
        async function fetchData() {
                const result = await axios.get("https://fakestoreapi.com/products");
                console.log(result.data);
                setProducts(result.data);
        }
        fetchData();
    }, []);

    return (
        <section id="wrapp">
            {products.map((product) => (
                <div className="Box" key={product.id}>
                    <Link to={`/product/${product.id}`}>
                        <img src={product.image} alt={product.title} />
                    </Link>
                    <h3>
                        <Link to={`/product/${product.id}`}>{product.title}</Link>
                    </h3>
                    <p>${product.price}</p>
                    
                    {
                    isButtonVisible ?( <div className="product-buttons">
                        <button onClick={handleIncrement}>+</button>
                        <p>{quantity}</p>
                        <button onClick={handleDecrement}>-</button>
                        <button><MdDeleteForever /></button>
                    </div>) :(
                       <Link to="/" className="btn" onClick={() => handleAddToCart(product)}>
                    Add To Cart 
                </Link>
                    )}
                </div>
            ))}
        </section>
    );
}

export default FetchProductAPIs;
