import React, { Component } from "react";

class Welcome extends Component {
  render() {
    // destructuring props in classes
    //! const {name, heroName} = this.props

    // destructuring states
    //? const {sate1, state2} = this.state
    return (
      <h1>
        Welcome {this.props.name} aka {this.props.heroName}
      </h1>
    );
  }
}

export default Welcome;
