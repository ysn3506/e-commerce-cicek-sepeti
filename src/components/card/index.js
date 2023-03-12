import React, { useState } from "react";
import PropTypes from 'prop-types';
import Button from "../button";
import './style.scss';

function Card({ item }) {
    const [itemAmount, setItemAmount] = useState(0);

    const incrementItem = () => setItemAmount(itemAmount + 1);
    const decrementItem = () => {
       if(itemAmount>0) setItemAmount(itemAmount - 1);
    } 
    
    const addToBasket = () => {
        incrementItem();
    }
  return (
    <div className="card-container">
      <div className="card-image">
        <picture>
          <source media="(max-width: 991px)" srcSet={item.images.small} />
          <source media="(min-width: 992px)" srcSet={item.images.big} />
          <img src={item.images.small} alt={item.description} />
        </picture>
      </div>
      <div className="card-content">
        <span className="card-description">{item.description}</span>
        <span className="card-shipment">
          {item.shipment === 1 ? "Ücretsiz Teslimat" : ""}
        </span>
        <span className="card-price">{item.price} TL </span>
      </div>

      {itemAmount === 0 ? (
        <Button
          clickHandler={addToBasket}
          classes="card-button card-item-button "
        >
          Sepete Ekle
        </Button>
      ) : (
        <div className="card-button">
          <div className="card-button-counter">
            <button className="minus" onClick={decrementItem}>
              -
            </button>
            <span> {itemAmount}</span>
            <button onClick={incrementItem}>+</button>
          </div>
        </div>
      )}
    </div>
  );
}

Card.propTypes = {
    item: PropTypes.object.isRequired
}

export default Card;
