import "./country.css";

const Country = () => {
  return (
    <section className="country-container">
      <div
        // onClick={() => dispatch(searchByName(item.cioc.toLowerCase()))}
        className="country-card"
        key=""
      >
        <img src="#" alt="" className="country-image" />
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
    </section>
  );
};

export default Country;
