import styled from 'styled-components';
import { ContainerProps } from 'types/styledComponents';

export const Container = styled.div<Pick<ContainerProps, 'background'>>`
  position: relative;
  margin: ${({ theme }) => theme.spaces.m}px auto;
  box-shadow: 24px 24px 24px 0px #0e1014;
  max-width: ${({ theme }) => theme.width[4]}vw;
  min-height: ${({ theme }) => theme.height[5]}vh;
  background: url(${({ background }) => background});
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    max-width: ${({ theme }) => theme.width.at(-3)}vw;
    margin: 0;
    min-height: 110vh;
  }
`;

export const Layout = styled.section`
  display: flex;
  width: ${({ theme }) => theme.width.at(-3)}%;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spaces.xl}px
    ${({ theme }) => theme.spaces.x}px 0 ${({ theme }) => theme.spaces.x}px;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    padding: 0;
  }
`;
