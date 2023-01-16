import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${({ theme }) => theme.height.at(-3)}vh;
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Spinner = styled.div`
  width: ${({ theme }) => theme.width.at(-2)}px;
  height: ${({ theme }) => theme.height.at(-2)}px;
  border: 10px solid ${({ theme }) => theme.colors.black};
  border-top: 10px solid ${({ theme }) => theme.colors.purple};
  border-radius: 50%;
  animation: spinner 1s linear infinite;
`;
