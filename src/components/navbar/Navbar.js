import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";

const Navbar = ({ theme, setTheme }) => {
  const navigate = useNavigate();
  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const icon =
    theme === "light" ? <MdLightMode size={12} /> : <FaMoon size={12} />;

  return (
    <NavStyle>
      <div className="logo" onClick={() => navigate("/")}>
        <h1>Where in the world?</h1>
      </div>
      <div className="theme-switcher">
        <button onClick={changeTheme}>
          {" "}
          {icon} {theme === "light" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </NavStyle>
  );
};

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 5rem;
  background-color: ${(prevState) => prevState.theme.navBackground};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media screen and (max-width: 768px) {
    padding: 2rem 2rem;
  }

  .logo {
    cursor: pointer;

    h1 {
      font-size: 3rem;
      font-weight: bold;
      color: ${(prevState) => prevState.theme.titleColor};

      @media screen and (max-width: 768px) {
        font-size: 2rem;
      }
    }
  }

  .theme-switcher {
    button {
      background: transparent;
      padding: 1rem 0rem;
      color: ${(prevState) => prevState.theme.titleColor};
      font-weight: 600;
    }
  }
`;

export default Navbar;
