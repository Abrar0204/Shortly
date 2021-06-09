import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,*::before,*::after{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%;
        overflow-x: hidden;
    }
    body{
        font-family: 'Poppins',sans-serif;
        font-size: 1.8rem;
        font-weight: 400;
        color: #9e9aa7;
    }
    button{
        font-size: 1.8rem;
        font-family: 'Poppins',sans-serif;
        border: none;
        outline: none;
    }
    h1,h2,h3,h4,h5,h6{
        color: #35323e;
    }
`;

export default GlobalStyle;
