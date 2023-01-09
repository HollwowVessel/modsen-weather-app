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
`;

export const CalendarItem = styled.li`
  font-size: ${({ theme }) => theme.fonts.s}px;
  margin: ${({ theme }) => theme.spaces.m}px 0 0 0;
`;

export const CalendarList = styled.ul`
  list-style-type: none;
  overflow: auto;
  height: ${({ theme }) => theme.height.s}vh;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    display: flex;
    gap: ${({ theme }) => theme.spaces.l}px;
    overflow: auto;
    max-width: ${({ theme }) => theme.width.x}%;
    height: ${({ theme }) => theme.height.ss}vh;
  }
`;

export const LoginButton = styled.button`
  padding: ${({ theme }) => theme.spaces.s}px;
  background: #31394b;
  color: #fff;
  border-radius: 20%;
  margin: 0 ${({ theme }) => theme.spaces.m}px 0 0;
`;

export const EventsButton = styled.button`
  padding: ${({ theme }) => theme.spaces.s}px;
  background: #31394b;
  color: #fff;
  border-radius: 20%;
`;

export const ButtonContainer = styled.div`
  margin: 0 auto;
  text-align: center;
`;
