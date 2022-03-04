import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *,
    *::before,
    *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }

    html{
        font-size: 62.5%;
    }

    body{
        background-color: ${(prevState) => prevState.theme.pageBackground};
        font-family:  'Nunito Sans', sans-serif;
    }

    button, input{
        font-family: inherit;
        border: none;
        cursor: pointer;

        &:focus{
            outline: none;
        }
    }

    a{
        text-decoration: none;
    }

    ul{
        list-style-type: none;
    }
`;
export default GlobalStyle;
