import { useState, useContext } from "react";
import styled from "styled-components";
import CountriesContext from "../../context/CountriesContext";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const FilterRegionComponent = () => {
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState("");

  const { fetchByRegions } = useContext(CountriesContext);

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania", "Polar"];

  const handleChange = (region) => {
    setSelected(region);
    fetchByRegions(region);
  };
  return (
    <FilterStyle>
      <div className="custom-select" onClick={() => setToggle(!toggle)}>
        <div className="select">
          <span> {selected !== "" ? selected : "Filter by region"}</span>
          {toggle ? (
            <FaAngleUp size={20} className="angle-down" />
          ) : (
            <FaAngleDown size={20} className="angle-down" />
          )}
        </div>
        {toggle && (
          <div className="select-options">
            {regions.map((region, index) => (
              <div
                className="option"
                key={index}
                onClick={() => handleChange(region)}
              >
                {region}
              </div>
            ))}
          </div>
        )}
      </div>
    </FilterStyle>
  );
};

const FilterStyle = styled.div`
  width: 200px;
  .custom-select {
    border-radius: 0.5rem;
    padding: 2rem 2rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: ${(prevState) => prevState.theme.searchBackground};
    color: ${(prevState) => prevState.theme.titleColor};
    position: relative;
    cursor: pointer;

    .select {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        display: inline-block;
        color: ${(prevState) => prevState.theme.titleColor};
        font-size: 1.4rem;
        font-weight: 600;
      }
    }

    .select-options {
      position: absolute;
      left: 0;
      width: 100%;
      background-color: ${(prevState) => prevState.theme.searchBackground};
      color: ${(prevState) => prevState.theme.titleColor};
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      border-radius: 0.5rem;
      margin-top: 2.3rem;
      overflow: hidden;

      .option {
        color: ${(prevState) => prevState.theme.titleColor};
        font-size: 1.4rem;
        font-weight: 600;
        padding: 1rem;

        &:hover {
          background-color: hsl(0, 0%, 52%);
        }
      }
    }
  }
`;

export default FilterRegionComponent;
