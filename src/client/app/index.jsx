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
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

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
        <h1> Master started kit with React, webpack and babel!</h1>
        <div>
           <ul>
              <li><Link>Home</Link></li>
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

ReactDOM.render(<App/>, document.getElementById('app'));

/*ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {App} />
      </Route>
   </Router>

), document.getElementById('app'));*/
