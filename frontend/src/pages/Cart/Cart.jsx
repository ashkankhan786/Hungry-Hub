import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../store/StoreContext";
import { assets, food_list } from "../../assets/assets";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItem, removeFromCart, cartTotal } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart container">
      <div className="heading">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div className="content">
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0)
            return (
              <>
                <div className="content-list" key={item._id}>
                  <img src={`${item.image}`}></img>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${item.price * cartItem[item._id]}</p>
                  <MdCancel
                    size={28}
                    onClick={() => {
                      removeFromCart(item._id);
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <hr />
              </>
            );
        })}
      </div>
      <div className="cart-footer">
        <div className="cart-total">
          <h1>Cart Total</h1>
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
            <button onClick={() => navigate("/order")}>
              Proceed to Checkout
            </button>
          </div>
        </div>
        <div className="promo-code">
          <div className="promo-code-content">
            <p>If you have a promocode, enter it here :</p>
            <div className="promo-code-input">
              <input placeholder="Promo Code"></input>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
