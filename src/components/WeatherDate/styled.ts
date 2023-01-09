import styled from 'styled-components';

export const TimeInfo = styled.h1`
  font-size: ${({ theme }) => theme.fonts.x}px;

  margin: 0 0 ${({ theme }) => theme.spaces.l}px 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    font-size: ${({ theme }) => theme.fonts.l}px;
  }
`;

export const DateInfo = styled.h2`
  font-size: ${({ theme }) => theme.fonts.m}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    font-size: ${({ theme }) => theme.fonts.s}px;
  }
`;

export const DateContainer = styled.div`
  text-align: center;
`;
