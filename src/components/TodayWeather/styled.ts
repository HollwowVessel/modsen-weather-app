import styled from 'styled-components';

export const TodayWeatherLayout = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spaces.s}px;
  margin: 0 ${({ theme }) => theme.m}px 0 0;
`;

export const TodayIcon = styled.img`
  width: ${({ theme }) => theme.width.at(-2)}px;
  height: ${({ theme }) => theme.height.at(-2)}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    width: ${({ theme }) => theme.width.at(-3)}px;
    height: ${({ theme }) => theme.height.at(-3)}px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    width: ${({ theme }) => theme.width[4]}px;
    height: ${({ theme }) => theme.height[4]}px;
  }
`;

export const TodayInfo = styled.div``;

export const Today = styled.h4`
  background: #242937;
  font-size: ${({ theme }) => theme.fonts[3]}px;
  padding: ${({ theme }) => theme.spaces.s}px;
  margin: 0 0 ${({ theme }) => theme.spaces.l}px;
  border: 5px solid #242937;
  border-radius: 48%;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    font-size: ${({ theme }) => theme.fonts[2]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    font-size: ${({ theme }) => theme.fonts[1]}px;
  }
`;

export const TodayTemperature = styled.h3`
  font-size: ${({ theme }) => theme.fonts.at(-2)}px;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    font-size: ${({ theme }) => theme.fonts[3]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    font-size: ${({ theme }) => theme.fonts[2]}px;
  }
`;
