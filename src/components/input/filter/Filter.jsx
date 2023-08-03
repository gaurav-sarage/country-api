import "./filter.css";
import { useState, useEffect } from 'react';

// Redux
import { useDispatch } from "react-redux";
import { reset, setRegion } from '../../../features/countries/countriesSlice';

const Filter = () => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const [filter, setFilter] = useState('');
  const [displayDropDown, setDisplayDropDown] = useState(false);

  const dispatch = useDispatch();

  const handleDropDown = () => {
    setDisplayDropDown(!displayDropDown)
  };

  useEffect(() => {
    if (filter !== "") {
      dispatch(setRegion(filter.toLowerCase()));
    }

    return () => {
      dispatch(reset);
    };
  }, [dispatch, filter]);

  return (
    <section className="filter-container">
      <div className="filter" onClick={handleDropDown}>
        <input
          readOnly
          type="text"
          placeholder="Filter by Region"
          value={filter}
          className="filter-input"
        />

        <i className="fa-solid fa-angle-down"></i>
      </div>

      {displayDropDown ? (
        <div className="dropdown">
          {regions.map((item, index) => {
            return (
              <div
                key={index}
                className="dropdown-item"
                onClick={() => {
                  setFilter(item);
                  handleDropDown();
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      ) : null}
    </section>
  );
};

export default Filter;