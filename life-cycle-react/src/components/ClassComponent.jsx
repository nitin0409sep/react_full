import React, { Component } from "react";

export class ClassComponent extends Component {
  //! 1st Loads
  constructor() {
    super();

    console.log("I am constructor");
  }

  //! 2nd Loads
  componentDidMount() {
    console.log("componentDidMount :: When Component Renders First Time");
  }

  //! 3rd If there is any update in state
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  //! 4th
  componentWillUnmount() {
    console.log("componentWillUnmount :: When you removes the component");
  }

  render() {
    return <div>ClassComponent</div>;
  }
}
