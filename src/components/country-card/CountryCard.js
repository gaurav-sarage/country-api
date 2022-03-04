import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CountryCard = ({ country }) => {
  return (
    <CardStyle
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <Link to={`details/${country.name}`}>
        <div className="flag">
          <img src={country.flags.svg} alt="flag" />
        </div>
        <div className="country-info">
          <h2>{country.name}</h2>
          <div className="country-stats">
            <h3>
              Population:{" "}
              <span>{country.population.toLocaleString("en-US")}</span>
            </h3>
            <h3>
              Region: <span>{country.region}</span>
            </h3>
            <h3>
              Capital: <span>{country.capital}</span>
            </h3>
          </div>
        </div>
      </Link>
    </CardStyle>
  );
};

const CardStyle = styled(motion.div)`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 0.5rem;
  background-color: ${(prevState) => prevState.theme.navBackground};
  overflow: hidden;

  .flag {
    img {
      width: 100%;
      height: 30vh;
      object-fit: cover;
    }
  }

  .country-info {
    padding: 2rem 2rem;

    h2 {
      color: ${(prevState) => prevState.theme.titleColor};
      font-size: 2rem;
    }

    .country-stats {
      margin-top: 1rem;

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
`;
export default CountryCard;
