import styled from 'styled-components';

import { WeatherContainerProps } from './types';

export const Container = styled.div<Pick<WeatherContainerProps, 'background'>>`
  position: relative;
  margin: ${({ theme }) => theme.spaces.m}px auto;
  box-shadow: 8px 16px 24px 24px ${({ theme }) => theme.colors.black};
  max-width: ${({ theme }) => theme.width[4]}vw;
  min-height: ${({ theme }) => theme.height[5]}vh;
  background: blur;
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    max-width: ${({ theme }) => theme.width.at(-3)}vw;
    margin: 0;
  }
`;

export const Layout = styled.section`
  display: flex;
  width: ${({ theme }) => theme.width.at(-3)}%;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spaces.xl}px
    ${({ theme }) => theme.spaces.x}px 0 ${({ theme }) => theme.spaces.x}px;

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    padding: 0;
  }
`;
