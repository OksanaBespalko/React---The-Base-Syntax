import React, { Component }  from 'react';
import './App.css';
import './index.css';
import UserInput from "./UserInput";
import UserOutput from "./UserOutput";

class App extends Component {

  state = {
    username: 'Your Text will display here'
  }
userTextChangeHandler = (event) => {

  this.setState ({username: event.target.value})
};

 render (){
 return (
      <div className="App">
        <header className="header">
        <p>Assignment: The Base Syntax</p>
        
        </header>
       
        <UserInput 
        changed={this.userTextChangeHandler}
        
        ></UserInput>
        <UserOutput userName={this.state.username}></UserOutput>
        <UserOutput userName="Your text won't be displayed"></UserOutput>
        <UserOutput userName={this.state.username}></UserOutput>
        <footer>
        <h2> Author: Oksana Bespalko</h2>
        </footer>
      </div>
     
    );
  }
}

export default App;
