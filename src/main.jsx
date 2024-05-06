import React from 'react';
import '/Users/maliha/Desktop/Coding Notes/Colt Steele - React/MyVersions/react-scav/ReactotronConfig.js';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from '/Users/maliha/Desktop/Coding Notes/Colt Steele - React/MyVersions/react-scav/src/components/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
