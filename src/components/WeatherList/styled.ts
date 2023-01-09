import styled from 'styled-components';

export const WeatherItems = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spaces.l}px;
  list-style-type: none;
  overflow-y: clip;
  overflow-x: auto;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    max-width: ${({ theme }) => theme.width.at(-3)}%;
    padding: 0 0 ${({ theme }) => theme.spaces.x}px;
  }
`;
