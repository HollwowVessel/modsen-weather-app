import styled from 'styled-components';

export const WeatherItems = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spaces.l}px;
  list-style-type: none;
  overflow-y: clip;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 20px;

    background: ${({ theme }) => theme.colors.black};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background: ${({ theme }) => theme.colors.purple};
  }

  &::-webkit-scrollbar-thumb:hover {
    border-radius: 20px;
    opacity: 0.8;
    background: ${({ theme }) => theme.colors.purple};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    max-width: ${({ theme }) => theme.width.at(-3)}%;
    padding: 0 0 ${({ theme }) => theme.spaces.x}px;
  }
`;
