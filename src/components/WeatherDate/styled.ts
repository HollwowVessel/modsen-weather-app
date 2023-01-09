import styled from 'styled-components';

export const TimeInfo = styled.h1`
  font-size: ${({ theme }) => theme.fonts.at(-3)}px;

  margin: 0 0 ${({ theme }) => theme.spaces.l}px 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    font-size: ${({ theme }) => theme.fonts[3]}px;
  }
`;

export const DateInfo = styled.h2`
  font-size: ${({ theme }) => theme.fonts[4]}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    font-size: ${({ theme }) => theme.fonts[2]}px;
  }
`;

export const DateContainer = styled.div`
  text-align: center;
`;
