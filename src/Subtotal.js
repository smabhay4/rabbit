import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const [{ basket }] = useStateValue();
  const history = useHistory();
  return (
    <div className="subtotal">
      <CurrencyFormat
        //prop1
        renderText={(value) => (
          <>
            <p>
              Subtotal ( {basket?.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This Order Contains A Gift
            </small>
          </>
        )}
        decimalScale={2} //prop2
        value={getBasketTotal(basket)} //prop3
        displayType={"text"} //prop4
        thousandSeparator={true} //prop5
        prefix={"₹"} //prop6
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed To Checkout
      </button>
    </div>
  );
}

export default Subtotal;
