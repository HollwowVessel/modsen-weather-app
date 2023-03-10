import styled from 'styled-components';

import { NavItemProps } from './types';

export const WeatherInfo = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spaces.x}px 0
    ${({ theme }) => theme.spaces.x}px;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: ${({ theme }) => theme.width.at(-3)}%;
  min-height: ${({ theme }) => theme.height[2]}vh;
  opacity: 0.95;
  background: ${({ theme }) => theme.colors.grey};

  @media (max-height: ${({ theme }) => theme.breakPoints.tablet}px) {
    flex-direction: column;
    min-height: ${({ theme }) => theme.height[3]}vh;
    justify-content: initial;
    position: initial;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    flex-direction: column;
    min-height: ${({ theme }) => theme.height[3]}vh;
    justify-content: initial;
    position: initial;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    padding: 0;
    min-height: ${({ theme }) => theme.height[3]}vh;
  }
`;

export const TimeType = styled.div`
  position: absolute;
  display: flex;
  top: ${({ theme }) => theme.spaces.s}px;
  left: ${({ theme }) => theme.spaces.l}px;
  margin: 0 0 ${({ theme }) => theme.spaces.l}px 0;

  @media (max-height: ${({ theme }) => theme.breakPoints.tablet}px) {
    justify-content: initial;
    position: initial;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    position: initial;
  }
`;

export const Item = styled.button<Pick<NavItemProps, 'background'>>`
  padding: ${({ theme }) => theme.spaces.l}px;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.lightGrey};
  background: ${({ background }) => background};
  cursor: pointer;
`;
