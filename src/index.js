import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { TweetProvider } from './context/TweetProvider';
import { UserProvider } from './context/UserProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserProvider>
      <TweetProvider>
        <App />
      </TweetProvider>
    </UserProvider>
  </BrowserRouter>
);