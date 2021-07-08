import React from "react";

const Hello = () => {
  // return (
  //     <div className= 'dummy-class>
  //         <h1>Hello Peepul</h1>
  //     </div>
  // ) with JSX

  return React.createElement(
    "div",
    { id: "hello", className: "dummy-class" },
    React.createElement("h1", null, "Hello Nipun")
  );
};

// JSX method is wayy simpler

export default Hello;
