import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`   
  :root {
    // Colors
    --color-primary: #8758FF;
    --color-dark: #0B0C1B;
    --color-semidark: #1A1B2E;
    --color-yellow: #FFC107;
    --color-text: #e1e1e6;
    --color-branco: #ffffff;
    --color-bg: #fcf9ff;
    --color-verde: #54e0c4;

    // Fonts
    --h1-font-size: 2.25rem;
    --h2-font-size: 1.5rem;
    --h3-font-size: 1.25rem;
    --normal-font-size: 1rem;
    --small-font-size: 0.875rem;
    --smaller-font-size: 0.813rem;

    --font-bold: 700;

    // Shadow
    --shadow: 0px 5px 20px 0px rgb(69 67 96 / 10%);

    // Border
    --border-radius: 20px;
  }

  // Responsive presets
  @media screen and (max-width: 1024px){
    :root {
        // Fonts
      --h1-font-size: 1.75rem;
      --h2-font-size: 1.25rem;
      --h3-font-size: 1rem;
      --normal-font-size: 0.938rem;
      --small-font-size: 0.813rem;
      --smaller-font-size: 0.75rem;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--color-dark);
    color: var(--color-text);
    font-family: "Inconsolata", Helvetica, Sans-Serif;
    text-rendering: optimizeLegibility;  /* não funciona no IE e Edge */
    -webkit-font-smoothing: antialiased; /* apenas para Mac OS X/macOS */
    -moz-osx-font-smoothing: grayscale; /* apenas para Mac OS X/macOS */
    font-smooth: always; /* Non-standard */
  }
`;
 
export default GlobalStyle;
