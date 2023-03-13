import React from "react";
import { useSelector } from "react-redux";
import BasketItem from "../basket-item";
import { calculateBasketTotalCost } from "../../../utils/helpers";
import "./style.scss";

function Basket() {
  const { basketItems, hidden } = useSelector((state) => state.basket);
  const { filterHidden } = useSelector((state) => state.items);
const totalCost = calculateBasketTotalCost();
  return (
    <div
      className={`basket-wrapper ${hidden && "hidden"} ${
        filterHidden && "back"
      } `}
    >
      {basketItems.length === 0 ? (
        <p>Sepetinizde Ürün Bulunmamaktadır.</p>
      ) : (
        <>
          {basketItems.map((item) => (
            <BasketItem key={item.name} item={item} />
          ))}
                      <div className="basket-bottom">
                          <div className="shipment">
                                {totalCost>500 && <span>Kargonuz bedava</span>}
                          </div>
            <div className="total-price">
              {`₺ ${totalCost}`}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Basket;
