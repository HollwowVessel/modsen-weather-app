import styled from 'styled-components';

export const WeatherInfo = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spaces.x}px 0
    ${({ theme }) => theme.spaces.x}px;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: ${({ theme }) => theme.width.x}%;
  height: ${({ theme }) => theme.height.l}vh;
  opacity: 0.95;
  background: #31394b;
`;
