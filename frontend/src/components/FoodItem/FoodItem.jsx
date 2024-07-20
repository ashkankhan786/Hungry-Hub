import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../store/StoreContext";

function FoodItem({ id, name, image, price, description }) {
  const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        {!cartItem[id] ? (
          <div className="addicon">
            <img src={assets.add_icon_white} onClick={() => addToCart(id)} />
          </div>
        ) : (
          <div className="addicon">
            <img src={assets.add_icon_green} onClick={() => addToCart(id)} />
            <h5>{cartItem[id]}</h5>
            <img
              src={assets.remove_icon_red}
              onClick={() => removeFromCart(id)}
            />
          </div>
        )}
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <p className="price">${price}</p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default FoodItem;
