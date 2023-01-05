import styled from 'styled-components';

export const TodayWeatherLayout = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spaces.s}px;
  margin: 0 30px 0 0;
`;

export const TodayIcon = styled.img`
  width: ${({ theme }) => theme.width.xl}px;
  height: ${({ theme }) => theme.height.xl}px;
`;

export const TodayInfo = styled.div``;

export const Today = styled.h4`
  background: #242937;
  font-size: ${({ theme }) => theme.fonts.l}px;
  padding: ${({ theme }) => theme.spaces.s}px;
  margin: 0 0 ${({ theme }) => theme.spaces.l}px;
  border: 5px solid #242937;
  border-radius: 48%;
`;

export const TodayTemperature = styled.h3`
  font-size: ${({ theme }) => theme.fonts.xl}px;
  text-align: center;
`;
