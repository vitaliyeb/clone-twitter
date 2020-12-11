import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme} >

      </ThemeProvider>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

