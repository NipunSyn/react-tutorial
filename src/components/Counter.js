// creating a counter to learn about state and set state

import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  // setstate method has to be used, else it won't work
  increment(props) {
    // calls to setState are asynchronous
    // thus, if something needs to be changed after setstate, pass it as a callback function

    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("Callback Value: ", this.state.count);
    //   }
    // );

    this.setState((prevState, props) => ({
        count: prevState.count + props.addValue
        // we can also use props as the second arguement, and pass in a variable on click
    }))

  }

  // a strange piece of code to increase the complexity and understand setState better
  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <h1>count - {this.state.count}</h1>
        <button
          onClick={() => {
            this.increment();
           // this.incrementFive(); //doesn't work as expected. //! This is because, react tries to group together multiple setState calls, and the updated value doesn't carry over.
            //? To get over this, we pass a function, and not the state directly.
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
