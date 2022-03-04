import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import styled from "styled-components";
import CountriesContext from "../context/CountriesContext";
import { css } from "@emotion/react";
import { DotLoader } from "react-spinners";
import { motion, AnimatePresence } from "framer-motion";

const override = css`
  display: block;
  margin: 0 auto;
`;

const DetailsPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);

  const { countries } = useContext(CountriesContext);

  useEffect(() => {
    setLoading(true);

    const requestedCountry = countries.filter((country) => {
      return country.name.toLowerCase() === name.toLowerCase();
    });

    setCountry(requestedCountry);
    setLoading(false);
  }, [name, countries]);

  return (
    <DetailsStyle
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
    >
      <AnimatePresence>
        <div className="back-btn">
          <button onClick={() => navigate("/")}>
            <FaLongArrowAltLeft size={20} className="long-arrow-icon" /> Back
          </button>
        </div>
        {loading && (
          <div style={{ marginTop: "2rem" }}>
            <DotLoader
              color={"hsl(180, 66%, 49%)"}
              css={override}
              loading={loading}
              size={60}
            />
          </div>
        )}
        {country.map((country, index) => (
          <div className="country-details" key={index}>
            <div className="country-flag">
              <img src={country.flags.svg} alt="flag" />
            </div>
            <div className="country-stats">
              <h1>{country.name}</h1>

              <div className="country-info">
                <div className="info-left">
                  <h3>
                    Native Name: <span>{country.nativeName}</span>
                  </h3>
                  <h3>
                    Population:{" "}
                    <span>{country.population.toLocaleString("en-US")}</span>
                  </h3>
                  <h3>
                    Region: <span>{country.region}</span>
                  </h3>
                  <h3>
                    Sub Region: <span>{country.subregion}</span>
                  </h3>
                  <h3>
                    Capital: <span>{country.capital}</span>
                  </h3>
                </div>
                <div className="info-right">
                  <h3>
                    Top Level Domain: <span>{country.topLevelDomain}</span>
                  </h3>
                  <h3>
                    Currencies:{" "}
                    {country.currencies ? (
                      <span>{country.currencies[0].name}</span>
                    ) : (
                      <span>No Currencies available</span>
                    )}
                  </h3>
                  <h3>
                    Languages:{" "}
                    {country.languages.map((language, index, arr) => (
                      <span key={index}>
                        {language.name}
                        {index !== arr.length - 1 ? ", " : " "}
                      </span>
                    ))}
                  </h3>
                </div>
              </div>
              <div className="country-borders">
                <h3>Border Countries: </h3>
                <div>
                  {country.borders ? (
                    <>
                      {country.borders.map((border, index) => {
                        const bordersCountryToName = countries.filter(
                          (country) => country.alpha3Code === border
                        );
                        return (
                          <button
                            type="button"
                            key={index}
                            onClick={() =>
                              navigate(
                                `/details/${bordersCountryToName[0].name}`
                              )
                            }
                          >
                            {bordersCountryToName[0].name}
                          </button>
                        );
                      })}
                    </>
                  ) : (
                    <span className="no-border">
                      &nbsp; Doesn't share border with anyone
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </AnimatePresence>
    </DetailsStyle>
  );
};

const DetailsStyle = styled(motion.div)`
  padding: 3rem 5rem;

  @media screen and (max-width: 768px) {
    padding: 3rem 2rem;
  }

  .back-btn {
    button {
      padding: 1rem 3rem;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      border-radius: 0.5rem;
      background-color: ${(prevState) => prevState.theme.navBackground};
      color: ${(prevState) => prevState.theme.titleColor};
      display: flex;
      align-items: center;
      transition: all 0.3s ease;

      &:active {
        transform: translateY(1rem);
      }
    }

    .long-arrow-icon {
      margin-right: 1rem;
      color: ${(prevState) => prevState.theme.titleColor};
    }
  }

  .country-details {
    padding: 5rem 0rem;
    display: flex;
    column-gap: 8rem;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }

    .country-flag {
      max-width: 600px;

      @media screen and (max-width: 768px) {
        max-width: none;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }
    }

    .country-stats {
      width: 600px;
      @media screen and (max-width: 768px) {
        margin-top: 2rem;
        width: auto;
      }

      h1 {
        color: ${(prevState) => prevState.theme.titleColor};
      }

      .country-info {
        display: flex;
        justify-content: space-between;
        align-items: baseline;

        @media screen and (max-width: 768px) {
          flex-direction: column;
          margin-top: 3rem;
        }
        .info-left {
          h3 {
            margin: 1rem 0rem;
            font-size: 1.5rem;
            color: ${(prevState) => prevState.theme.titleColor};
          }

          span {
            display: inline-block;
            color: ${(prevState) => prevState.theme.searchInput};
            font-weight: lighter;
          }
        }

        .info-right {
          h3 {
            margin: 1rem 0rem;
            font-size: 1.5rem;
            color: ${(prevState) => prevState.theme.titleColor};
          }

          span {
            display: inline-block;
            color: ${(prevState) => prevState.theme.searchInput};
            font-weight: lighter;
          }
        }
      }

      .country-borders {
        display: flex;
        align-items: baseline;

        @media screen and (max-width: 768px) {
          flex-direction: column;
          align-items: flex-start;
          flex-wrap: wrap;
        }

        h3 {
          margin: 5rem 0rem;
          font-size: 1.5rem;
          color: ${(prevState) => prevState.theme.titleColor};

          @media screen and (max-width: 768px) {
            margin: 2rem 0rem;
          }
        }

        div .no-border {
          display: inline-block;
          color: ${(prevState) => prevState.theme.searchInput};
          font-size: 1.5rem;
          font-weight: bold;
        }

        button {
          margin: 1rem 1rem 0rem 1rem;
          padding: 1rem 3rem;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          border-radius: 0.5rem;
          background-color: ${(prevState) => prevState.theme.navBackground};
          color: ${(prevState) => prevState.theme.titleColor};
          transition: all 0.3s ease;

          &:active {
            transform: translateY(1rem);
          }

          @media screen and (max-width: 768px) {
            margin: 1rem 1rem 0rem 0rem;
          }
        }
      }
    }
  }
`;
export default DetailsPage;
