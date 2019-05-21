import React, { Component } from 'react';
import Routes from '../src/Routes';
import { HashRouter, Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
      <div>
        <nav className='nav'>
          <div>WestSide University</div> 
          <div className='link-wrap'>
            <Link to="/" className='links'>Home</Link>
            <Link to="/about" className='links'>About</Link>
          </div>
        </nav>
        { Routes }
      </div>

      </HashRouter>
    
    )
  }
}