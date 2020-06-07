import styled, { css } from 'styled-components';

import ToolTip from '../ToolTip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
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
    props.isErrored &&
    css`
      border-color: ${(color) => color.theme.colors.red};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: ${(color) => color.theme.colors.orange};
      border-color: ${(color) => color.theme.colors.orange};
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: ${(color) => color.theme.colors.orange};
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

export const Error = styled(ToolTip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: ${(color) => color.theme.colors.red};
    color: #fff;

    &:before {
      border-color: ${(color) => color.theme.colors.red} transparent;
    }
  }
`;
