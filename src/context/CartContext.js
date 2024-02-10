import { createContext } from "react";

const CartContext = createContext({
    cartList: [], 
    addCartItem: () => {},
    removeCartItem: () => {}
})

export default CartContext