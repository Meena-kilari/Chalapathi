/*import logo from './images.jpg';
import vedio from './vedio5.mp4';
import './App.css';*/

/*
function App() {
  return (
    <div className="App">
      <p>hello just go to heaven</p>
    </div>
  );
}

export default App;*/
/*import React, { Component }from 'react';
class App extends React.Component{
  render(){
    return(
      <div>
      <First/>
      <Second/>
      </div>
      );
  }
}
class First extends React.Component{
  render(){
    return(
      <div>
      <p>Hello</p>
      </div>
      );
  }
}

class Second extends React.Component{
  render(){
    return(
      <div>
      <h2>Hello</h2>
      <p>just waste of time</p>
      </div>
      );
  }
}
export default App;*/

/*import React, { Component }from 'react';
class App extends React.Component{
  render(){
    return(
      <div>
      <First/>
      <Second/>
      </div>
      );
  }
}
class First extends React.Component{
  render(){
    return(
      <div>
      <p>Hello</p>
      </div>
      );
  }
}

class Second extends React.Component{
  render(){
    return(
      <div>
      <h2>Hello</h2>
      <p>just waste of time</p>
      </div>
      );
  }
}
export default App;*/

/*import React, { Component } from 'react';
class App extends React.Component{
  render(){
    return(
      <div>
      <Mom/>
      <Bro/>
      <Nani/>
      </div>
      );
  }
}
class Mom extends React.Component{
  render(){
    return(
      <div>
      
      <img src={logo} className="App-logo" alt="logo" />
      </div>
      );
  }
}

class Bro extends React.Component{
  render(){
    return(
      <div className="meena">
            <h1>Login</h1>
            <form id="loginForm">
                <div><label className="form-label">Email:</label>
                <div><input type="email" required/></div></div>
                <div><label className="form-label">Password:</label>
                <div><input type="password" required/></div>
                <div>
                <button type="submit">Submit</button></div>
            </form>
            <p>Don't have an account?Sign up</p>
      </div>
      );
  }
}


class Nani extends React.Component{
  render(){
    return(
      <div>
      <vedio src={vedio} className="mp4" alt="vedio" / >
      </div>
      );
  }
}
export default App;*/





/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

//used to contain data or information about the component. The state in a component can change over time. A component with the state is known as stateful components. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It can be set by using the setState() method and calling setState() method triggers UI updates. To set an initial state before any interaction occurs, we need to use the getInitialState() method.To define a state, you have to first declare a default set of values for defining the component's initial state. To do this, add a class constructor which assigns an initial state using this.state. The 'this.state' property can be rendered inside render() method.
/*
import React from 'react';  
class App extends React.Component {  
 constructor() {  
      super();        
      this.state = { myinfo: true };  
      }  
      render() {  
          const mango = this.state.myinfo ? (  
              <div>  
                  <p><h3>used to contain data or information about the component. The state in a component can change over time. A component with the state is known as stateful components. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It can be set by using the setState() method and calling setState() method triggers UI updates. To set an initial state before any interaction occurs, we need to use the getInitialState() method.To define a state, you have to first declare a default set of values for defining the component's initial state. To do this, add a class constructor which assigns an initial state using this.state. The 'this.state' property can be rendered inside render() method.</h3></p>   
            </div>  
              ) : null;  
              return (  
                  <div>  
                      <h1> Welcome to Mango city </h1>  
                      { mango }   
                  </div>  
              );  
     }  
}  
export default App; */


import Meenakshi from 'react';  
class App extends Meenakshi.Component {  
 constructor() {  
      super();        
      this.state = { myinfo: false };  
      //console.log('Component this', this);  
      this.togglemyBio = this.togglemyBio.bind(this);  
      }  
      togglemyBio(){  
          this.setState({myinfo: !this.state.myinfo});  
          }  
      render() {  
          return (  
              <div>  
                  <h1>Welcome to Mango city</h1>    
                  {  
                      this.state.myinfo ? (   
                          <div>  
                              <h1>Login</h1>
                                  <form id="loginForm">
                                  <div><label className="form-label">Email:</label>
                                  <input type="email" required/></div>
                                  <div><label className="form-label">Password:</label>
                                  <input type="password" required/></div>
                                  <div><button type="submit">Submit</button></div>
                                  </form>
                                  <div><button onClick={this.togglemyBio}> Show Less </button></div> 
                        </div>  
                          ) : (  
                              <div>  
                                  <button onClick={this.togglemyBio}> Read More </button>  
                              </div>  
                          )  
                  }  
             </div>  
        )  
    }  
}  
export default App;

/*
import React from 'react';  
class App extends React.Component {  
   render() {     
      return (  
          <div>  
            <h1> Mangos are imported from { this.props.name } </h1>    
            <p> <h4> Welcome to Mango city </h4> </p>          
          </div>  
      );  
   }  
}  
export default App;  
*/

/*import React from 'react';  
class App extends React.Component {  
   render() {     
      return (  
          <div>  
              <h1>Thats the property </h1>  
            <h3>Welcome to {this.props.name}</h3>   
            <p>Mango city are guntur or salem?</p>          
          </div>  
        );  
    }  
}  
App.defaultProps = {  
   name: "Salem" 
}  
export default App;*/