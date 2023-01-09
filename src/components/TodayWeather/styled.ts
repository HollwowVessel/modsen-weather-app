import styled from 'styled-components';

export const TodayWeatherLayout = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spaces.s}px;
  margin: 0 ${({ theme }) => theme.m}px 0 0;
`;

export const TodayIcon = styled.img`
  width: ${({ theme }) => theme.width.xl}px;
  height: ${({ theme }) => theme.height.xl}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    width: ${({ theme }) => theme.width.x}px;
    height: ${({ theme }) => theme.height.x}px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    width: ${({ theme }) => theme.width.m}px;
    height: ${({ theme }) => theme.height.m}px;
  }
`;

export const TodayInfo = styled.div``;

export const Today = styled.h4`
  background: #242937;
  font-size: ${({ theme }) => theme.fonts.l}px;
  padding: ${({ theme }) => theme.spaces.s}px;
  margin: 0 0 ${({ theme }) => theme.spaces.l}px;
  border: 5px solid #242937;
  border-radius: 48%;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    font-size: ${({ theme }) => theme.fonts.s}px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    font-size: ${({ theme }) => theme.fonts.ss}px;
  }
`;

export const TodayTemperature = styled.h3`
  font-size: ${({ theme }) => theme.fonts.xl}px;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    font-size: ${({ theme }) => theme.fonts.l}px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    font-size: ${({ theme }) => theme.fonts.s}px;
  }
`;
