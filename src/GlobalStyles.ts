import { createGlobalStyle } from 'styled-components';
import { GlobalStylesProps } from 'types/styledComponents';

export const GlobalStyles = createGlobalStyle<
  Pick<GlobalStylesProps, 'background'>
>`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        overflow: hidden;
        color: #fff;
        background:  url(${({ background }) => background}) ;
        background-size: cover;
        background-repeat: no-repeat;
        height: 140vh;
    }

    @media (max-width: 1000px){
        body{
            overflow: initial;
            height: 100vh;
        }
    }
`;
