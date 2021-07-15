import React, { Component } from "react";

//there are four different ways to set up conditional rendering

//1. if else
//2. element variables
//3. ternary operator
//4.

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
    this.changeState = this.changeState.bind(this)
  }

  changeState(state) {
    this.setState({
        isLoggedIn: state
    })
  }

  render() {
    //! method 1
    // if(this.state.isLoggedIn) {
    //     return <div>Welcome Nipun</div>
    // }else {
    //     return <div>Welcome Guest</div>
    // }

    //! method 2
    // let message
    // if (this.state.isLoggedIn) {
    //     message = <div>Welcome Nipun</div>
    // }else {
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>

    //! method 3 (can be used inside JSX)
    return this.state.isLoggedIn ? (
      <div>
        <div>Hello Nipun</div>
        <button onClick = {() => this.changeState(false)}>Log Out</button>
      </div>
    ) : (
      <div>
        <div>Hello Guest</div>
        <button onClick = {() => this.changeState(true)}>Log In</button>
      </div>
    );

    //! method 4 (not very useful- avoid)
    // return this.state.isLoggedIn && <div>Welcome Nipun</div>


    // return (
    //   <div>
    //     <div>Welcome Nipun</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
