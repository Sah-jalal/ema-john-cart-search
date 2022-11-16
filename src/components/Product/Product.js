import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './product.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {name, img, seller, price, ratings} = props.product;
    const {handleAddToCart} = props;
    return (
        <div className='product'>
            <img src={img} alt=''></img>
            <div className="product-name">
                <p>{name}</p>
                <p>Price : $ {price}</p>
                <p>Manufacturer :{seller}</p>
                <p>Ratings :{ratings} Star</p>
            </div>

            <div>
                <button onClick={() => handleAddToCart(props.product)}  className='cart-btn'>
                    <p>Add to Cart: <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
                    
                </button>
            </div>

        </div>
    );
};

export default Product;