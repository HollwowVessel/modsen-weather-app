import styled from 'styled-components';

export const Layout = styled.section`
  display: flex;
  width: ${({ theme }) => theme.width.x}%;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spaces.xl}px
    ${({ theme }) => theme.spaces.x}px 0 ${({ theme }) => theme.spaces.x}px;
`;
