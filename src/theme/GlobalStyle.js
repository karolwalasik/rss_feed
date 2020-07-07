import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;600&display=swap');

    *, *::before, *::after{
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Oswald', sans-serif;
    }

    html{
        font-size:62.5%;
    }

    body{
        font-size: 1.6rem;
    }
    
`;

export default GlobalStyle;
