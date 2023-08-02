import "./country.css";
import { useState, useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { showAllCountries } from "../../features/countries/countriesAction";


const Country = () => {
  const [countriesData, loading, success, error] = useSelector((state) => state.country);

  const dispatch = useDispatch();

  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    dispatch(showAllCountries);

    if(success) {
      setCountryData(countriesData);
    }


    if(error) {
      console.log(error);
    }
  }, [dispatch, error, success, countriesData])

  return (
    <section className="country-container">
      {loading ? (<h1>Loading...</h1>) : (
        countryData.length > 0 && countryData.map((item, index) => {
          return (
            <div className="country-card" key="">
              <img src={item.flags.png} alt={item.flags.alt} className="country-image" />
                <div className="country-content">
                  <h3> </h3>
                  <p>
                    Population: <span></span>
                  </p>
                  <p>
                    Region: <span></span>
                  </p>
                  <p>
                    Capital: <span></span>
                  </p>
                </div>
            </div>
          )
        }) 
      )}
      
    </section>
  );
};

export default Country;
