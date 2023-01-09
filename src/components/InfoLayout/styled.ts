import styled from 'styled-components';

export const Layout = styled.section`
  position: relative;
`;

export const Time = styled.span`
  border: 0px solid #31394b;
  border-radius: 100%;
  padding: ${({ theme }) => theme.spaces.s}px;
  background: #31394b;
  margin: ${({ theme }) => theme.spaces.s}px ${({ theme }) => theme.spaces.m}px
    ${({ theme }) => theme.spaces.l}px 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    font-size: ${({ theme }) => theme.fonts[2]}px;
    margin: 0 0 ${({ theme }) => theme.spaces.s}px;
    display: inline-block;
  }
`;

export const Summary = styled.span``;

export const CalendarItem = styled.li`
  font-size: ${({ theme }) => theme.fonts[2]}px;
  margin: ${({ theme }) => theme.spaces.m}px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    font-size: ${({ theme }) => theme.fonts[1]}px;
  }
`;

export const CalendarList = styled.ul`
  list-style-type: none;
  overflow-x: clip;
  overflow-y: auto;
  height: ${({ theme }) => theme.height[1]}vh;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    display: flex;
    gap: ${({ theme }) => theme.spaces.l}px;
    overflow-x: auto;
    overflow-y: clip;
    max-width: ${({ theme }) => theme.width.at(-3)}%;
  }
`;

export const LoginButton = styled.button`
  padding: ${({ theme }) => theme.spaces.s}px;
  background: #31394b;
  color: #fff;
  border-radius: 20%;
  margin: 0 ${({ theme }) => theme.spaces.m}px 0 0;
  cursor: pointer;
`;

export const EventsButton = styled.button`
  padding: ${({ theme }) => theme.spaces.s}px;
  background: #31394b;
  color: #fff;
  border-radius: 20%;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  margin: 0 auto;
  text-align: center;
`;
