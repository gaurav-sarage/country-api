import { createContext, useState, useEffect } from "react";
import axios from "axios";

const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCountries();
  }, []);

  const searchCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  const fetchCountries = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://restcountries.com/v2/all");
      setCountries(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchByRegions = async (region) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://restcountries.com/v2/region/${region}`
      );
      setCountries(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CountriesContext.Provider
      value={{
        fetchCountries,
        countries,
        loading,
        search,
        setSearch,
        searchCountries,
        fetchByRegions,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
