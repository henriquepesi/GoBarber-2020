import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: ${(props) => props.theme.colors.orange};
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-top: 13px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => shade(0.2, props.theme.colors.orange)};
  }
`;
