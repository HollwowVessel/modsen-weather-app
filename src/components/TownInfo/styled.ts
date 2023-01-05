import styled from 'styled-components';

export const Town = styled.h2`
  font-size: ${({ theme }) => theme.fonts.m}px;
  margin: 0 0 ${({ theme }) => theme.spaces.m}px 0;
`;

export const Country = styled.h3`
  font-size: ${({ theme }) => theme.fonts.l}px;
  margin: 0 0 ${({ theme }) => theme.spaces.m}px 0;
`;

export const TownInfoContainer = styled.div``;

export const ShowInput = styled.button`
  border: 5px solid #242937;
  background: #242937;
  border-radius: 48%;
  color: #fff;
  padding: ${({ theme }) => theme.spaces.s}px;
  cursor: pointer;
`;
