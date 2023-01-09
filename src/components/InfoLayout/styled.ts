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
`;

export const LoginButton = styled.button``;

export const EventsButton = styled.button``;
