import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CryptoContext from "./Context"


ReactDOM.render(
  <CryptoContext>
    <App />
  </CryptoContext>,
  document.getElementById('root')
);


