import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        } 

        @media (max-width: 720px) {
            font-size:  87.5%;
        }
    }

    body {
        background-image: url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80');
        background-size: contain;
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea , button {
        font-family:  'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    :focus {
      outline: 0;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
 
    button {
        cursor: pointer;
    }
        
`
