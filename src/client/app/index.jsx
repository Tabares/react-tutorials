import React from 'react';
import AwesomeComponent from './components/Component.jsx';
import JSX from './components/JSX.jsx';
import State from './components/State.jsx';
import Title from './components/props/Title.jsx';
import Body from './components/props/Body.jsx';
import Validation from './components/props/Validation.jsx';
import SetState from './components/SetState.jsx';
import ForceUpdate from './components/ForceUpdate.jsx';
import FindDOM from './components/FindDOM.jsx';
import LifeCycle from './components/LifeCycle.jsx';
import Forms from './components/Forms.jsx';
import FormProp from './components/form/FormProp.jsx';
import Event from './components/Event.jsx';
import ReactDOM from 'react-dom';
import Refs from './components/Refs.jsx';
import Keys from './components/keys/Keys.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      header: "the title",
      body: "This is my body injected to the Component",
      data: 0
    }
    this.setNewNumber = this.setNewNumber.bind(this);
  }

  setNewNumber(){
    this.setState({data: this.state.data + 1})
  }

  unmountApp(){
    setTimeout(() => {ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 10000);
  }

  render () {
    return (
      <div>
        <h1> Master started kit with React, express, webpack and babel!</h1>
        <div>
           <ul>
              <li><Link>Homed</Link></li>
              <li><Link>About</Link></li>
              <li><Link>Contact</Link></li>
           </ul>

          {this.props.children}
        </div>



        <br/><p>Npm as tool runner</p>
        <br/><h1> This is a Component!</h1>
        <AwesomeComponent/>
        <JSX/>
        <State/>
        <Title headerProp= {this.state.header}/>
        <Body bodyProp= {this.state.body}/>
        <Validation/>
        <h3>{this.props.footer}</h3>
        <SetState/>
        <ForceUpdate/>
        <FindDOM/>
        <div>
            <button onClick = {this.setNewNumber}>INCREMENT</button>
            <LifeCycle myNumber = {this.state.data}></LifeCycle>
            <button onClick = {this.unmountApp}>Unmount This App</button>
        </div>
        <Forms/>
        <FormProp/>
        <Event/>
        <Refs/>
        <Keys/>
        <About/>
        <Contact/>
      </div>
    );
  }
}

App.defaultProps = {
   footer: "Injected footer...",
}

export default App;

//ReactDOM.render(<App/>, document.getElementById('app'));

"use strict";
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

//var { Router, Route, IndexRoute, Link, browserHistory } = ReactRouter

var MainLayout = React.createClass({
  render: function() {
    return (
      <div className="app">
        <header className="primary-header"></header>
        <aside className="primary-aside">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/widgets">Widgets</Link></li>
          </ul>
        </aside>
        <main>
          {this.props.children}
        </main>
      </div>
      )
  }
})

var Homei = React.createClass({
  render: function() {
    return (<h1>Home Page</h1>)
  }
})

var SearchLayout = React.createClass({
  render: function() {
    return (
      <div className="search">
        <header className="search-header"></header>
        <div className="results">
          {this.props.children}
        </div>
        <div className="search-footer pagination"></div>
      </div>
      )
  }
})

var UserList = React.createClass({
  render: function() {
    return (
      <ul className="user-list">
        <li>Dan</li>
        <li>Ryan</li>
        <li>Michael</li>
      </ul>
      )
  }
})

var WidgetList = React.createClass({
  render: function() {
    return (
      <ul className="widget-list">
        <li>Widget 1</li>
        <li>Widget 2</li>
        <li>Widget 3</li>
      </ul>
      )
  }
})

// Note that with how CodePen works, I wasn't able to get the browserHistory to work
// as the article suggests. The demo works without it, but you'll want to be sure to
// use it in a real application
ReactDOM.render((
  <Router>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Homei} />
      <Route component={SearchLayout}>
        <Route path="users" component={UserList} />
        <Route path="widgets" component={WidgetList} />
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))
