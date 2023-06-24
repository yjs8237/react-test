import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReducerApp from './ReducerApp';
import ContextSample from './contextSample';
import TodoApp from './TodoApp';
import Users from './restapi/Users';
import UserContextApp from './restapi/UserContextApp';
import { UsersProvider } from './restapi/UsersContext';
import { BrowserRouter } from 'react-router-dom';
import RouterApp from './router/RouterApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UsersProvider>
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </UsersProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
