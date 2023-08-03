import './country.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import {
  searchByRegion,
  showAllCountries
} from '../../features/countries/countriesAction';
import { reset } from '../../features/countries/countriesSlice';

const Country = () => {
  const { countriesData, loading, success, error, region, searchTerm } = useSelector((state) => state.country);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showAllCountrie());

    if(region) {
      dispatch(searchByRegion(region));
    }

    if(error) {
      console.log(error);
    }
  }, [dispatch, error, success, region]);

  const data = countriesData.filter((item) => item.name.common.toLowerCase().includes(searchTerm));

  return (
    <section className='country-container'>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data.length > 0 &&
        data.map((item, index) => {
          
        })
      )}
    </section>
  )
}