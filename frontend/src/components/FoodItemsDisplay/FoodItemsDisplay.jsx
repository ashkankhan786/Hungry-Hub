import React from "react";
import { food_list } from "../../assets/assets";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodItemsDisplay.css";
function FoodItemsDisplay({ category }) {
  return (
    <div className="fooditemsdisplay">
      {food_list.map((item, index) => {
        if (category === "All" || category === item.category) {
          return (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
              description={item.description}
            />
          );
        }
      })}
    </div>
  );
}

export default FoodItemsDisplay;
