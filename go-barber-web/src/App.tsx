import React from 'react';
import { ThemeProvider } from 'styled-components';
import variables from './styles/variables/colors';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <ThemeProvider theme={variables}>
    <SignUp />
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
