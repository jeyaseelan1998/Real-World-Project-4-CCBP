import React, { useContext } from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

import CartContext from '../../context/CartContext';
import './index.css'

const Product = ({ productDetails }) => {
    const { id, name, price, currency, quantity, imgUrl } = productDetails

    const { cartList, addCartItem, removeCartItem } = useContext(CartContext)

    const onClickAdd = () => addCartItem(productDetails)

    const onClickMinus = () => removeCartItem(id)

    const isItemAddedToCart = () => cartList.find(each => each.id === id)

    return (
        <li className='product-container'>
            <div className='image-button-container'>
                <img className='product-image' alt={name} src={imgUrl} />
                {
                    !isItemAddedToCart() ? (<button type="button" className='add-remove-btn' onClick={onClickAdd}>
                        <FaPlus />
                    </button>) : (<button type="button" className='add-remove-btn' onClick={onClickMinus}>
                        <FaMinus />
                    </button>)
                }
            </div>

            <p className='product-price'>{currency + price}</p>
            <p className='product-name'>{name}</p>
            <p className='product-qty'>{quantity}</p>
        </li>
    )
}

export default Product