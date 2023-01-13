import styled from 'styled-components';

export const FixedBox = styled.div`
  position: fixed;
  width: ${({ theme }) => theme.width.at(-3)}vw;
  min-height: ${({ theme }) => theme.height.at(-3)}vh;
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
  width: ${({ theme }) => theme.width.at(-1)}px;
  min-height: ${({ theme }) => theme.height.at(-1)}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.darkGrey};
  opacity: 0.8;
  border-radius: 5% 20% 5% 20%;
  z-index: 3;
`;

export const Town = styled.input`
  padding: ${({ theme }) => theme.spaces.s}px;
  outline: none;
  border: none;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fonts[1]}px;
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
  font-size: ${({ theme }) => theme.fonts.at(-1)}px;
  margin: 0 0 ${({ theme }) => theme.spaces.x}px 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    font-size: ${({ theme }) => theme.fonts.at(-2)}px;
  }
`;

export const TownButton = styled.button`
  padding: ${({ theme }) => theme.spaces.s}px;
  outline: none;
  border: 2px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fonts[2]}px;
  background: none;
  opacity: 0.6;
  transition: 0.8s;
  &:focus,
  &:hover,
  &:active {
    background: ${({ theme }) => theme.black};
    opacity: 1;
  }
  margin: 0 0 ${({ theme }) => theme.spaces.x}px 0;
`;
