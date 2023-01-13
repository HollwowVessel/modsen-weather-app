import styled from 'styled-components';

export const DayOfWeek = styled.p`
  border: 5px solid ${({ theme }) => theme.colors.darkGrey};
  background: ${({ theme }) => theme.colors.darkGrey};
  border-radius: 48%;
  padding: ${({ theme }) => theme.spaces.s}px;
  font-size: ${({ theme }) => theme.fonts[2]}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    font-size: ${({ theme }) => theme.fonts[1]}px;
  }
`;

export const DailyIcon = styled.img`
  width: ${({ theme }) => theme.width.at(-3)}px;
  max-height: ${({ theme }) => theme.height.l}vh;
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    width: ${({ theme }) => theme.width[4]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    width: ${({ theme }) => theme.width[3]}px;
  }
`;

export const DailyTemperature = styled.p`
  font-size: ${({ theme }) => theme.fonts[3]}px;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    font-size: ${({ theme }) => theme.fonts[1]}px;
  }
`;

export const ItemContainer = styled.li`
  display: flex;
  gap: ${({ theme }) => theme.spaces.s}px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fonts[3]}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    font-size: ${({ theme }) => theme.fonts[1]}px;
  }
`;
