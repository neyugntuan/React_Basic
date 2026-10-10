import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "eric",
    address: "hoidanit",
    age: 26,
  };

  handleClick = (event) => {
    console.log(">> Click me my button");
    console.log("My name is ", this.state.name);

    this.setState({
      name: "ahrry",
    });
    this.setState({
      age: 22,
    });
  };

  handleOnMoverOver(event) {
    console.log(event);
  }

  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and i'm from {this.state.address}
        <button onMouseOver={this.handleOnMoverOver}>Hover me</button>
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default MyComponent;
