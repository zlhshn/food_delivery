import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExplorerMenu from "../../components/ExplorerMenu/ExplorerMenu";
import FoodDisplay from "../../components/foodDisplay/FoodDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExplorerMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
    </div>
  );
};

export default Home;
