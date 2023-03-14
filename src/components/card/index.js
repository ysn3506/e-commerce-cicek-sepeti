import React from "react";
import PropTypes from "prop-types";
import Button from "../button";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../storage/redux/basket/actions";

function Card({ item }) {
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket.basketItems);
  const itemInBasket = basketItems.find(
    (el) => el.productId === item.productId
  );
  const basketAmount = itemInBasket ? itemInBasket.quantity : 0;

  const incrementItem = () => {
    dispatch(addItem(item));
  };
  const decrementItem = () => {
    if (basketAmount > 0) dispatch(removeItem(item));
  };

  const addToBasket = () => {
    incrementItem();
  };
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

      {basketAmount === 0 ? (
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
            <span> {basketAmount}</span>
            <button onClick={incrementItem}>+</button>
          </div>
        </div>
      )}
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Card;
