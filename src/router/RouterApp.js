import React from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';
import HistorySample from './HistorySample';
import NotFound from './NotFound';

function RouterApp(props) {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/" >홈</NavLink>
          </li>
          <li>
            <NavLink to="/about">어바웃</NavLink>
          </li>
          <li>
            <NavLink to="/profiles">사용자목록</NavLink>
          </li>
          <li>
            <NavLink to="/history">히스토리</NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/profiles/:name" Component={Profile}></Route>
          <Route path="/history" Component={HistorySample}></Route>
          <Route path="/*" Component={NotFound}></Route>
        </Routes>
      </div>
    );
}

export default RouterApp;