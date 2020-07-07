import React from "react";

function Dinner(props) {
  return (
    <div>
      <h1>Hello, How are you?</h1>
      <h2>
        My Name is {props.fname} {props.lname}
      </h2>
    </div>
  );
}

export default Dinner;
