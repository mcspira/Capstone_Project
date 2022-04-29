import { useContext } from "react";

import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { UserContext } from "../../contexts/user.context";

export const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  console.log(currentUser)

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
          <Link className="signIn-link" to="/auth">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
