import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f9;
    color: #333;
  }

  header, footer {
    background-color: #282c34;
    color: white;
    padding: 1rem;
  }

  a {
    color: #61dafb;
    text-decoration: none;
  }

  h1, h2, h3 {
    color: #282c34;
  }

  section {
    margin: 2rem auto;
    max-width: 1000px;
  }

  nav ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
  }

  nav a {
    padding: 1rem;
    color: white;
  }
`;

export default GlobalStyle;
