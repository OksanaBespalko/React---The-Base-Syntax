import React from "react";
import './App.css';

const UserOutput = (props) => {
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid black',
    padding: '8px',
    margin: '10px',
    width: '40%',
  };
  return (
    <div className="UserOutput" style={style}>
      <p className="Paragraph">User Output : {props.userName}</p>
      <p className="Paragraph">Pharagraph which should not be changed
      </p>
    </div>
  )
};


export default UserOutput;