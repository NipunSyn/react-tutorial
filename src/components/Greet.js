import React from "react";

// props are similar to arguments that can be passed to the function (or class) and changes the state accordingly
// note, how only {} is required to add a variable and not ${}

// destructuring is done using curly braces in two ways
// const Greet = (props) => {

//! first way - while calling the function
// !const Greet = ({name, heroName, children}) => {

//? second way = inside the function body
  const Greet = (props) => {
const {name, heroName, children} = props
  return (
    <div>
      <h1>
        Hello {name} aka {heroName}
      </h1>
      {children}
    </div>
  );
};
export default Greet;
