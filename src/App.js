import React, { useState } from 'react'

import Home from './components/Home'

import CartContext from './context/CartContext'
import './App.css'

const App = () => {
  const [cartList, setCartList] = useState([])

  const addCartItem = (product) => {
    setCartList(prevState => [...prevState, product])
  }

  const removeCartItem = (productId) => {
    const filteredProducts = cartList.filter(each => each.id !== productId)
    setCartList(filteredProducts)
  }

  return (
    <CartContext.Provider value={{
      cartList,
      addCartItem,
      removeCartItem
    }}>
      <Home />
    </CartContext.Provider>
  )
}

export default App