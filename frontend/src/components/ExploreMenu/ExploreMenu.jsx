import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

function ExploreMenu({ category, setCategory }) {
  return (
    <div className="exploremenu" id="exploremenu">
      <h1>Explore our menu</h1>
      <p>Select from a diverse range of dishes</p>
      <div className="exploremenu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              );
            }}
          >
            <img
              src={item.menu_image}
              className={category === item.menu_name ? "active" : ""}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreMenu;
