import React, { useContext } from 'react'
import { CgShoppingCart } from "react-icons/cg";

import CartContext from '../../context/CartContext';
import './index.css'

const Header = () => {
    const { cartList } = useContext(CartContext)


    return (
        <header className='header-container'>
            <a href='#main' className='website-logo-link'>
                <h1 className='website-logo'>E-Commerce</h1>
            </a>

            <button type='button' className='cart-btn'>
                <CgShoppingCart className='cart-icon' />
                <p className='cart-count'>{cartList.length}</p>
            </button>
        </header>
    )
}

export default Header