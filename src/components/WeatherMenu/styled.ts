import styled from 'styled-components';
import { NavItemProps } from 'types/styledComponents';

export const WeatherInfo = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spaces.x}px 0
    ${({ theme }) => theme.spaces.x}px;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: ${({ theme }) => theme.width.at(-3)}%;
  height: ${({ theme }) => theme.height[2]}vh;
  opacity: 0.95;
  background: #31394b;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    flex-direction: column;
    justify-content: initial;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.smallMobile}px) {
    padding: 0;
    height: ${({ theme }) => theme.height[3]}vh;
  }
`;

export const Nav = styled.ul`
  position: absolute;
  display: flex;
  list-style-type: none;
  top: ${({ theme }) => theme.spaces.s}px;
  left: ${({ theme }) => theme.spaces.l}px;
  margin: 0 0 ${({ theme }) => theme.spaces.l}px 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    position: initial;
  }
`;

export const NavItem = styled.li<Pick<NavItemProps, 'background'>>`
  padding: ${({ theme }) => theme.spaces.l}px;
  border: 2px solid #202531;
  background: ${({ background }) => background};
  cursor: pointer;
`;
