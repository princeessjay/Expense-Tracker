import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ExpenseTracker from './ExpenseTracker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <ExpenseTracker/>
  </React.StrictMode>
);
