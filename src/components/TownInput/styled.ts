import styled from 'styled-components';

export const FixedBox = styled.div`
  position: fixed;
  width: ${({ theme }) => theme.width.x}vw;
  height: ${({ theme }) => theme.width.x}vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;

  z-index: 2;
`;

export const TownInputContainer = styled.div`
  position: absolute;
  width: ${({ theme }) => theme.width.xxl}px;
  height: ${({ theme }) => theme.height.xxl}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #242937;
  opacity: 0.8;
  border-radius: 5% 20% 5% 20%;
  z-index: 3;
`;

export const Town = styled.input`
  padding: ${({ theme }) => theme.spaces.s}px;
  outline: none;
  border: none;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fonts.s}px;
  opacity: 0.8;
  transition: 0.8s;
  &:focus,
  &:hover,
  &:active {
    opacity: 1;
  }
  margin: 0 0 ${({ theme }) => theme.spaces.x}px 0;
`;

export const TownHeading = styled.h3`
  opacity: 1;
  font-size: ${({ theme }) => theme.fonts.xxl}px;
  margin: 0 0 ${({ theme }) => theme.spaces.x}px 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    font-size: ${({ theme }) => theme.fonts.xl}px;
  }
`;

export const TownButton = styled.button`
  padding: ${({ theme }) => theme.spaces.s}px;
  outline: none;
  border: 2px solid #fff;
  color: #fff;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fonts.s}px;
  background: none;
  opacity: 0.6;
  transition: 0.8s;
  &:focus,
  &:hover,
  &:active {
    background: #111;
    opacity: 1;
  }
  margin: 0 0 ${({ theme }) => theme.spaces.x}px 0;
`;
