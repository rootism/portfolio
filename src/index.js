import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const globalBackgroundStyle = {
  backgroundColor: '#1A1A1A', // Your desired background color
  minHeight: '100vh',
  width: '100vw',
  position: 'absolute', // To cover entire viewport
  top: 0,
  left: 0,
  zIndex: -1, // Push it behind other content
};

root.render(
  <React.StrictMode>
    {/* New wrapper div for the background */}
    <div style={globalBackgroundStyle}></div>
    <App /> {/* Your main Portfolio component */}
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
