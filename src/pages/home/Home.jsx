import "./home.css";
import { useEffect, useState } from "react";
import Filter from "../../components/input/filter/Filter";
import Search from "../../components/input/search/Search";
import Country from "../../components/country/Country";

const Home = () => {
  return (
    <section className="home-page-container">
      <div className="input-container">
        <Search />
        <Filter />
      </div>
      <Country />
    </section>
  );
};

export default Home;