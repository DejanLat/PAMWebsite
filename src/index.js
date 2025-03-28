import React from 'react';
import ReactDOM from 'react-dom/client'; // 
import App from './App';

const rootElement = document.getElementById('root'); // Ensure the root element exists
const root = ReactDOM.createRoot(rootElement); // 

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
