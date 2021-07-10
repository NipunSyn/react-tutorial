import React from "react";

// props are similar to arguments that can be passed to the function (or class) and changes the state accordingly
// note, how only {} is required to add a variable and not ${}

const Greet = (props) => {
  //   console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} aka {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};
export default Greet;
