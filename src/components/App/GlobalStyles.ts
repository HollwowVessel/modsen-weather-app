import { createGlobalStyle } from 'styled-components';

import { GlobalStylesProps } from './types';

export const GlobalStyles = createGlobalStyle<
  Pick<GlobalStylesProps, 'background'>
>`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        
        color: #fff;
        background:  url(${({ background }) => background}) ;
        background-size: cover;
        background-repeat: no-repeat;

    }

    
    @media (max-width: 1280px  ){
        body{
            overflow: initial;
            
        }
    }

`;
