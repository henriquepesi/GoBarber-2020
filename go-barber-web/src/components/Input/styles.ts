import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${(props) => props.theme.colors.dark};
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.colors.dark};
  padding: 12px;
  width: 100%;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: ${(props) => props.theme.colors.orange};
      border-color: ${(props) => props.theme.colors.orange};
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: ${(props) => props.theme.colors.orange};
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
