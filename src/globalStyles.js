import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        color: #202020;
        background-color: #efefef;
        padding-top: 4rem;
    }

    * {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyle;