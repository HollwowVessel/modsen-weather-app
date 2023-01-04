import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  margin: ${({ theme }) => theme.spaces.m}px auto;
  box-shadow: 8px 16px 16px 0px rgba(0, 0, 0, 0.69);
  max-width: ${({ theme }) => theme.width.m}vw;
  min-height: ${({ theme }) => theme.height.x}vh;
  background: url(https://cdn2.hubspot.net/hubfs/2936356/maxresdefault.jpg);
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Layout = styled.section`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spaces.xl}px
    ${({ theme }) => theme.spaces.x}px 0 ${({ theme }) => theme.spaces.x}px;
`;
