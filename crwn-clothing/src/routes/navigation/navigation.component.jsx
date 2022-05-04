import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";

import {CartIcon} from "../../components/cart-icon/cart-icon.component"
import { CartDropdown } from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { useContext } from "react";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

export const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext)

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
          ) : (
            <Link className="signIn-link" to="/auth">
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
      </div>
      {isCartOpen && <CartDropdown />}
      <Outlet />
    </>
  );
};
