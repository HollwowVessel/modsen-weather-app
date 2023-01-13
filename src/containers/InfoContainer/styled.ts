import styled from 'styled-components';

export const Layout = styled.section`
  display: flex;
  width: ${({ theme }) => theme.width.at(-3)}%;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spaces.xl}px
    ${({ theme }) => theme.spaces.x}px 0 ${({ theme }) => theme.spaces.x}px;

  @media (max-height: ${({ theme }) => theme.breakPoints.tablet}px) {
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    padding: ${({ theme }) => theme.spaces.x}px
      ${({ theme }) => theme.spaces.m}px 0 ${({ theme }) => theme.spaces.m}px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    padding: ${({ theme }) => theme.spaces.x}px
      ${({ theme }) => theme.spaces.m}px 0 ${({ theme }) => theme.spaces.m}px;
  }
`;
