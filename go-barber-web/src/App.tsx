import React from 'react';
import { ThemeProvider } from 'styled-components';
import SignIn from './pages/SignIn';
import variables from './styles/variables/colors';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <ThemeProvider theme={variables}>
    <SignIn />
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
