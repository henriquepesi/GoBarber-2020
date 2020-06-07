import React from 'react';
import { ThemeProvider } from 'styled-components';
import variables from './styles/variables/colors';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import GlobalStyle from './styles/global';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <ThemeProvider theme={variables}>
        <SignIn />
      </ThemeProvider>
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
