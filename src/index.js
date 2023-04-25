import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const container = document.getElementById('root');
const root = createRoot(container);

const GlobalStyle = createGlobalStyle` ${reset} `;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);
