import React from 'react';
import { ThemeProvider } from 'styled-components';
import variables from './styles/variables/colors';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import GlobalStyle from './styles/global';

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <ThemeProvider theme={variables}>
        <SignIn />
      </ThemeProvider>
    </AppProvider>
    <GlobalStyle />
  </>
);

export default App;
