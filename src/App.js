import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./components/GlobalStyle";
import { CountriesProvider } from "./context/CountriesContext";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import Navbar from "./components/navbar/Navbar";
import { ThemeProvider } from "styled-components";

const LightTheme = {
  pageBackground: "hsl(0, 0%, 98%)",
  titleColor: "hsl(200, 15%, 8%)",
  navBackground: "hsl(0, 0%, 100%)",
  searchBackground: "hsl(0, 0%, 100%)",
  searchInput: "hsl(0, 0%, 52%)",
  searchColor: "hsl(0, 0%, 52%)",
};

const DarkTheme = {
  pageBackground: "hsl(207, 26%, 17%)",
  titleColor: "hsl(0, 0%, 100%)",
  navBackground: "hsl(209, 23%, 22%)",
  searchBackground: "hsl(209, 23%, 22%)",
  searchInput: "hsl(0, 0%, 100%)",
  searchColor: "hsl(0, 0%, 100%)",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <CountriesProvider>
        <Router>
          <Navbar theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/details/:name" element={<DetailsPage />} />
          </Routes>
        </Router>
      </CountriesProvider>
    </ThemeProvider>
  );
}

export default App;
