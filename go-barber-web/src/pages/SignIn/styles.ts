import styled from 'styled-components';
import { shade } from 'polished';

import signInBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 400px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
  }

  h1 {
    margin-bottom: 24px;
  }

  input {
    color: #f4ede8;
    background: ${(props) => props.theme.colors.dark};
    border-radius: 10px;
    border: 2px solid ${(props) => props.theme.colors.dark};
    padding: 16px;
    width: 100%;

    & + input {
      margin-top: 8px;
    }
  }

  button {
    background: ${(props) => props.theme.colors.orange};
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #312e38;
    width: 100%;
    font-weight: 500;
    margin-top: 16px;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${(props) => shade(0.2, props.theme.colors.orange)};
    }
  }
  a {
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }

  > a {
    color: ${(props) => shade(0.2, props.theme.colors.orange)};
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${(props) => shade(0.2, props.theme.colors.orange)};
    }
  }
`;

export const Background = styled.div`
  flex: 1;

  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`;
