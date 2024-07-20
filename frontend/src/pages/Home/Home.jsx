import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodItemsDisplay from "../../components/FoodItemsDisplay/FoodItemsDisplay";
function Home({ showLogin }) {
  const [category, setCategory] = useState("All");
  return (
    <div className={`${showLogin === true ? "home" : ""}`}>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <hr />
      <FoodItemsDisplay category={category} />
      <hr />
    </div>
  );
}

export default Home;
