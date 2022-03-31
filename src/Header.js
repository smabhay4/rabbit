import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import logo from "./logo.jpg";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="amazon logo" />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login">
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="option__lineOne">
              HELLO {!user ? "GUEST" : user.email}
            </span>
            <span className="option__lineTwo">
              {!user ? "SIGN IN" : "SIGN OUT"}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="option__lineOne">RETURNS</span>
          <span className="option__lineTwo">&ORDERS</span>
        </div>
        <div className="header__option">
          <span className="option__lineOne">YOUR</span>
          <span className="option__lineTwo">PRIME</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon />

            <span className="header__optionlineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
