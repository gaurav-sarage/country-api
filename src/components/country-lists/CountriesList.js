import { useContext } from "react";
import styled from "styled-components";
import CountriesContext from "../../context/CountriesContext";
import CountryCard from "../country-card/CountryCard";
import { css } from "@emotion/react";
import { DotLoader } from "react-spinners";
import { motion } from "framer-motion";

const override = css`
  display: block;
  margin: 0 auto;
`;

const CountriesList = () => {
  const { searchCountries, loading } = useContext(CountriesContext);

  if (loading) {
    return (
      <div style={{ marginTop: "2rem" }}>
        <DotLoader
          color={"hsl(180, 66%, 49%)"}
          css={override}
          loading={loading}
          size={60}
        />
      </div>
    );
  }

  return (
    <CounrtryListStyle layout>
      {searchCountries.map((country, index) => (
        <CountryCard country={country} key={index} />
      ))}
    </CounrtryListStyle>
  );
};

const CounrtryListStyle = styled(motion.div)`
  padding: 2rem 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  grid-auto-flow: row;
`;

export default CountriesList;
