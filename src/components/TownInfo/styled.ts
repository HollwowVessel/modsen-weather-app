import styled from 'styled-components';

export const Town = styled.h2`
  font-size: ${({ theme }) => theme.fonts[4]}px;
  margin: 0 0 ${({ theme }) => theme.spaces.m}px 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    font-size: ${({ theme }) => theme.fonts[3]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.smallMobile}px) {
    font-size: ${({ theme }) => theme.fonts[2]}px;
  }
`;

export const Country = styled.h3`
  font-size: ${({ theme }) => theme.fonts.l}px;
  margin: 0 0 ${({ theme }) => theme.spaces.m}px 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    font-size: ${({ theme }) => theme.fonts[2]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.smallMobile}px) {
    font-size: ${({ theme }) => theme.fonts[1]}px;
  }
`;

export const TownInfoContainer = styled.div`
  text-align: center;
`;

export const ShowInput = styled.button`
  border: 5px solid #242937;
  background: #242937;
  border-radius: 48%;
  color: #fff;
  padding: ${({ theme }) => theme.spaces.s}px;
  cursor: pointer;
`;
