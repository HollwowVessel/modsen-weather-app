import styled from 'styled-components';

export const DayOfWeek = styled.p`
  border: 5px solid #242937;
  background: #242937;
  border-radius: 48%;
  padding: ${({ theme }) => theme.spaces.s}px;
  font-size: ${({ theme }) => theme.fonts.s}px;
`;

export const DailyIcon = styled.img`
  width: ${({ theme }) => theme.width.x}px;
  max-height: ${({ theme }) => theme.height.l}vh;
`;

export const DailyTemperature = styled.p`
  font-size: ${({ theme }) => theme.fonts.l}px;
  text-align: center;
`;

export const ItemContainer = styled.li`
  display: flex;
  gap: ${({ theme }) => theme.spaces.s}px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fonts.l}px;
`;
