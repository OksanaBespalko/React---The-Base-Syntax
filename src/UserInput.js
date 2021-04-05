import React from "react";
import './App.css';

const UserInput = (props) => {
  return (
    <div>
      <input type="text"  placeholder="Type your text here" onChange={props.changed} value={props.username} />
      </div>
  )
};


export default UserInput;


