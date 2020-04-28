import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from '../logo.svg';

function HomePage() {
  return (
    <div className="LoginPage">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link to="/login">Login</Link>
      </header>
    </div>
  );
}

export default HomePage;
