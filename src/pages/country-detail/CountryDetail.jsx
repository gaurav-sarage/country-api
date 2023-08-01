import "./country-detail.css";

const CountryDetail = () => {
  return (
    <section className="country-detail-container">
      <div className="back-button" to="/">
        <i className="fa-solid fa-arrow-left"></i> Back
      </div>

      <div className="country-detail-content">
        <>
          <img src="#" alt="name" className="country-detail-image" />

          <div className="country-detail-right">
            <h1></h1>
            <div className="details">
              <div className="detail-left">
                <p>
                  Offcial Name: <span>{}</span>
                </p>
                <p>
                  Population: <span>{}</span>
                </p>
                <p>
                  Region: <span>{}</span>
                </p>

                <p>
                  Sub Region: <span>{}</span>
                </p>
                <p>
                  Capital: <span>{}</span>
                </p>
              </div>

              <div className="detail-right">
                <p>
                  Top Level Domain: <span>{}</span>
                </p>
                <p>
                  Currencies:
                  <span></span>
                </p>

                <p>
                  Languages:
                  <span></span>
                </p>
              </div>
            </div>

            <div className="border">
              <p>Border Countries:</p>
            </div>
          </div>
        </>
      </div>
    </section>
  );
};

export default CountryDetail;
