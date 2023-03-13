import React from "react";
import PropTypes from "prop-types";
import { addItem, removeItem } from "../../../storage/redux/basket/actions";
import { useDispatch } from "react-redux";
import "./style.scss";



function BasketItem({ item }) {
  const dispatch = useDispatch();
  const { price, description, quantity } = item;

  return (
    <div className="basket-item">
      <div className="item-details">
        <span className="name">{description}</span>
        <span className="price">₺{(price * quantity).toFixed(2)}</span>
      </div>
      <div className="counter">
        <button onClick={() => dispatch(removeItem(item))}>-</button>
        <div>{quantity}</div>
        <button onClick={() => dispatch(addItem(item))}>+</button>
      </div>
    </div>
  );
}

BasketItem.propTypes = {
  // item prop includes the information for each item in the basket
  item: PropTypes.object.isRequired,
};

export default BasketItem;
