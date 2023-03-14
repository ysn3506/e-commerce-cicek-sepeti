import React from "react";
import "./style.scss";
import basketIcon from "../../../assets/basket_icon.svg";
import StormIcon from "../../../assets/stormIcon";
import { useDispatch, useSelector } from "react-redux";
import { freeShippingMaxAmount } from "../../../utils/constants";
import Basket from "../basket";
import { toggleBasketHidden } from "../../../storage/redux/basket/actions";

function BasketButton() {
  const dispatch = useDispatch();
  const { basketItems, hidden } = useSelector((state) => state.basket);
  const numberOfItems = basketItems.length;
  const totalPrice = basketItems.reduce(
    (acc, el) => el.price * el.quantity + acc,
    0
  );
  const progressWidth =
    totalPrice / freeShippingMaxAmount > 1
      ? "100%"
      : `${(totalPrice / freeShippingMaxAmount) * 100}%`;
  const amountToFreeShipping = (freeShippingMaxAmount - totalPrice).toFixed(0);

  const toggleBasketVisibility = () => dispatch(toggleBasketHidden());

  return (
    <>
      <div className="basket-button" onClick={toggleBasketVisibility}>
        <img src={basketIcon} alt="basket-icon" />
        <span>Sepetim</span>
        {numberOfItems > 0 && (
          <div className="item-amount">{numberOfItems}</div>
        )}
        {numberOfItems > 0 && hidden && (
          <div className="shipment-warning">
            <div className="amount">
              {amountToFreeShipping > 0 ? (
                <>
                  <StormIcon />
                  <span>{amountToFreeShipping} TL</span>ürün daha ekleyin kargo
                  bedava
                </>
              ) : (
                <span className="free-span">Kargonuz Bedava</span>
              )}
            </div>

            <div className="progress">
              <div
                className="progress-active"
                style={{ width: progressWidth }}
              ></div>
            </div>
          </div>
        )}
      </div>
      <Basket />
    </>
  );
}

export default BasketButton;
