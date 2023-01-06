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
  width: ${({ theme }) => theme.width.x}%;
  height: ${({ theme }) => theme.height.l}vh;
  opacity: 0.95;
  background: #31394b;
`;

export const Nav = styled.ul`
  position: absolute;
  display: flex;
  list-style-type: none;
  top: 10px;
  left: 20px;
  margin: 0 0 20px 0;
`;

export const NavItem = styled.li<Pick<NavItemProps, 'background'>>`
  padding: 10px;
  border: 2px solid #202531;
  background: ${({ background }) => background};
  cursor: pointer;
`;
