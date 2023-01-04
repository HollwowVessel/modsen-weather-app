import styled from 'styled-components';

export const TodayWeatherLayout = styled.div`
  display: flex;
  gap: 20px;
`;

export const TodayIcon = styled.img``;

export const TodayInfo = styled.div``;

export const Today = styled.h4`
  background: #242937;
  font-size: ${({ theme }) => theme.fonts.l}px;
  padding: ${({ theme }) => theme.spaces.s}px;
  border: 5px solid #242937;
  border-radius: 48%;
`;

export const TodayTemperature = styled.h3`
  font-size: ${({ theme }) => theme.fonts.xl}px;
  text-align: center;
`;
