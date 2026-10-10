import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  //JSX
  render() {
    const myInfor = ["a", "b", "c"];
    return (
      <div>
        <UserInfor />
        <br></br>
        <DisplayInfor name="Hoi dan it" age="30" />
        <hr></hr>
        <DisplayInfor name="eirc" age={26} myInfor={myInfor} />
      </div>
    );
  }
}

export default MyComponent;
