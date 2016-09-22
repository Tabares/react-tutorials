import React from 'react';
import { Router, Route, Link, hashHistory, IndexRoute  } from 'react-router';

class MainLayout extends React.Component{
  render(){
    return(
      <div className="app">
        <header className="primary-header"></header>
        <aside className="primary-aside">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/keys">Keys Example</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </aside>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default MainLayout;
