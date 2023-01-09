import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin: ${({ theme }) => theme.spaces.m}px auto;
  box-shadow: 24px 24px 24px 0px #0e1014;
  max-width: ${({ theme }) => theme.width.m}vw;
  min-height: ${({ theme }) => theme.height.i}vh;
  background: url(${({ theme }) => theme.sunny});
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    max-width: ${({ theme }) => theme.width.x}vw;
    margin: ${({ theme }) => theme.spaces.m}px
      ${({ theme }) => theme.spaces.m}px;
  }
`;

export const Layout = styled.section`
  display: flex;
  width: ${({ theme }) => theme.width.x}%;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spaces.xl}px
    ${({ theme }) => theme.spaces.x}px 0 ${({ theme }) => theme.spaces.x}px;
`;
