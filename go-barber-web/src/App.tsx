import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import variables from './styles/variables/colors';

import GlobalStyle from './styles/global';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <ThemeProvider theme={variables}>
        <Routes />
      </ThemeProvider>
    </AppProvider>
    <GlobalStyle />
  </Router>
);

export default App;
