import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      message: "Goodbye",
    }); //will throw an error if this is not bound to the event handler

    // console.log(this) //will log undefined when this is not bound
  }

  //to take care of the error -

  //method one: use bind in the event handler

  //method two: use arrow functions in the render method

  //method three: bind in the constructor itself

  //method four: use arrow function as a class property (didn't work, maybe deprecated)

  //!method three is the preferred approach as the binding takes place once in the constructor

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* method one */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* method two (notice we call the clickHandler function in this approach) */}
        {/* <button onClick = {() => this.clickHandler()}>Click</button> */}

        {/* method three */}
        <button onClick = {this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
