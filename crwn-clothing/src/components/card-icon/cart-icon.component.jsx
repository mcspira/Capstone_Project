import { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

export const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext)

  const toggleCartIsOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <div className="cart-icon-container" onClick={toggleCartIsOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="icon-count">0</span>
    </div>
  );
};
