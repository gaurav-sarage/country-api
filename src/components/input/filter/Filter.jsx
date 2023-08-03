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

  
}