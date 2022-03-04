import { useContext } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import FilterRegionComponent from "../filter-region/FilterRegionComponent";
import CountriesContext from "../../context/CountriesContext";

const SearchComponent = () => {
  const { search, setSearch } = useContext(CountriesContext);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <SearchStyle>
      <FaSearch size={20} className="search-icon" />
      <input
        type="search"
        placeholder="Search for a country..."
        onChange={handleChange}
        value={search}
      />
      <FilterRegionComponent />
    </SearchStyle>
  );
};

const SearchStyle = styled.div`
  padding: 3rem 5rem;
  display: flex;
  justify-content: space-between;
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 3rem 2rem;
    flex-direction: column;
    row-gap: 3rem;
  }

  .search-icon {
    position: absolute;
    top: 42%;
    left: 8rem;
    color: ${(prevState) => prevState.theme.searchColor};

    @media screen and (max-width: 768px) {
      top: 23%;
      left: 5rem;
    }
  }

  input[type="search"] {
    padding: 2rem 8rem;
    width: 50%;
    border-radius: 0.5rem;
    font-size: 1.4rem;
    font-weight: 500;
    background-color: ${(prevState) => prevState.theme.searchBackground};
    color: ${(prevState) => prevState.theme.searchInput};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    @media screen and (max-width: 768px) {
      width: 100%;
    }

    &::placeholder {
      color: ${(prevState) => prevState.theme.searchInput};
    }
  }
`;

export default SearchComponent;
