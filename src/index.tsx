import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { defaultTheme } from './types/theme';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <HashRouter
      // basename={process.env.PUBLIC_URL}
      >
        <App />
      </HashRouter>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
