import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        overflow: hidden;
        color: #fff;
        background: #1b1e27;
        background-size: cover;
        background-repeat: no-repeat;
    }
`;
