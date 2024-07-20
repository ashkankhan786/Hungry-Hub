import React from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../store/StoreContext";
import { useContext } from "react";

function PlaceOrder() {
  const { cartTotal, cartItem } = useContext(StoreContext);
  return (
    <div className="place-order container">
      <div className="form-area">
        <h2>Delivery Information</h2>
        <form className="customer-form">
          <div className="multi-fields">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <div className="single-field">
            <input type="email" placeholder="Email address" />
          </div>
          <div className="single-field">
            <input type="text" placeholder="Street" />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder="Zip code" />
            <input type="text" placeholder="Country" />
          </div>
          <div className="single-field">
            <input type="tel" placeholder="Phone" />
          </div>
        </form>
      </div>
      <div className="cart-total-area">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <br />
          <div className="cart-subtotal">
            <p>Subtotal</p>
            <p>${cartTotal()}</p>
          </div>
          <hr />
          <div className="del-fee">
            <p>Delivery Fee</p>
            <p>{Object.keys(cartItem).length == 0 ? "$0" : "$2"}</p>
          </div>
          <hr />
          <div className="cart-complete-total">
            <p>Total</p>
            <p>${cartTotal() + (Object.keys(cartItem).length == 0 ? 0 : 2)}</p>
          </div>
          <br />
          <div>
            <button>Proceed to Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
