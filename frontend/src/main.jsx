import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Make sure you have an App component in src/App.jsx
import './index.css'; // Import your global CSS (e.g., Tailwind CSS)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
