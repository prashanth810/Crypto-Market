import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import CoincontextProvider from './Context/Coincontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CoincontextProvider>
      <App />
    </CoincontextProvider>
  </BrowserRouter>
);

reportWebVitals();
