import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  *,
  *::before,
  *::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  :root {
    --padding-x: 0.5rem;
  }

  html{
    font-size:16px;
    overflow-x:hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  body {
    font-family: 'Alata';
    background: #ffffff;
    overflow-x:hidden;
  }

  img{
    max-width:100%;
    display:block;
  }

`;

export default GlobalStyles;
