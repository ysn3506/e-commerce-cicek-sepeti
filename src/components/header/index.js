import React from "react";
import BasketButton from "../basket/basket-button";
import Logo from "../../assets/logo";
import "./style.scss";
import SearchBar from "../search-bar";

function Header() {

  return (
    <div className="header wrapper">
      <div className="header-up">
              <Logo />
              <SearchBar/>
              <BasketButton/>
            
      </div>
      <div className="header-down">
        <h1>ÇiçekSepeti</h1>
      </div>
    </div>
  );
}

export default Header;
