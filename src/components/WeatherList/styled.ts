import styled from 'styled-components';

export const WeatherItems = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spaces.l}px;
  list-style-type: none;
  overflow: auto;
`;
