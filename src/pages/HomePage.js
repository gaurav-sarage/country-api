import SearchComponent from "../components/search/SearchComponent";
import CountriesList from "../components/country-lists/CountriesList";

const HomePage = () => {
  return (
    <div>
      <SearchComponent />
      <CountriesList />
    </div>
  );
};

export default HomePage;
