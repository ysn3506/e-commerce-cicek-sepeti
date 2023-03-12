import React from "react";
import BasketButton from "../basket/basket-button";
import Logo from "../logo";
import "./style.scss";

function Header() {

  return (
    <div className="header wrapper">
      <div className="header-up">
              <Logo />
              <h1>Arama Çubuğu</h1>
              <BasketButton/>
            
      </div>
      <div className="header-down">
        <h1>ÇiçekSepeti</h1>
      </div>
    </div>
  );
}

export default Header;
