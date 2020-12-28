import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import theme from './theme';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme} >
          <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

