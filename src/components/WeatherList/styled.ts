import styled from 'styled-components';

export const WeatherItem = styled.li`
  font-size: ${({ theme }) => theme.fonts.l}px;
`;

export const WeatherItems = styled.ul`
  list-style-type: none;
`;

export const DayOfWeek = styled.p`
  border: 5px solid #242937;
  background: #242937;
  border-radius: 48%;
  padding: ${({ theme }) => theme.spaces.s}px;
  font-size: ${({ theme }) => theme.fonts.s}px;
`;

export const DailyIcon = styled.img``;

export const DailyTemperature = styled.p`
  font-size: ${({ theme }) => theme.fonts.l}px;
`;
