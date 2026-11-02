import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

class DisplayInfor extends React.Component {
  constructor(props){
    console.log(">>> Call constructor: 1")
    super(props);
    //babel compiler
    this.state = {
      isShowListUser: true
    }
  }

  componentDidMount(){
    console.log(">>> Call me component did mount")
    setTimeout(() => {
      document.title = 'Eric'
    }, 3000 );
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log(">>> Call me component did update", this.props, prevProps)
    if(this.props.listUsers !== prevProps.listUsers){
      if(this.props.listUsers.length === 5){
        alert("you got 5 user")
      }
    }
  }

  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };
  render() {
    console.log(">>> Call me render")
    const { listUsers } = this.props;
    return (
      <div className="display-infor-container">
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser === true
              ? "Hide List User:"
              : "Show List User"}
          </span>
        </div>
        {this.state.isShowListUser && (
          <>
            {listUsers.map((user, index) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name is {user.name}</div>
                  <div>My age is {user.age}</div>
                  <hr></hr>
                  <div>
                    <button
                      onClick={() => this.props.handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
