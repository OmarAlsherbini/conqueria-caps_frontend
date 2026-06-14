// src/globalStyles.tsx
import { createGlobalStyle } from "styled-components";
import "@fontsource/rakkas"; // Import Rakkas font from fontsource

const GlobalStyle = createGlobalStyle`
  /* Set Rakkas as the universal default font */
  body {
    font-family: 'Rakkas', sans-serif;
    // margin: 0;
    // padding: 0;
    // box-sizing: border-box;
    // background-color: #f9f9f9; /* Adjust to your app's default background */
  }

  * {
    font-family: inherit; /* Ensure all elements inherit the body font */
  }
`;

export default GlobalStyle;
