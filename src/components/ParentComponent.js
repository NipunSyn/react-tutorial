import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

//our objective is to make the child component call the parent component's method
//this is achieved by passing the method itself as props

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }

  // Calling the childName as a parameter here. The childname has been passed in the childComponent

  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}></ChildComponent>
      </div>
    );
  }
}

export default ParentComponent;
