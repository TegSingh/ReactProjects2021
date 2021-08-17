import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// React.StrictMode activates additional warnings although it does not render anything specific
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
