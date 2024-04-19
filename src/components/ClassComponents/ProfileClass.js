import React from "react";
import UserContext from "../../utils/UserContext";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Randy orton",
      },
    };
    console.log("Js");
  }
  async componentDidMount() {
    this.timer=setInterval(()=>{
      console.log("NAMASTE REACT OP")
    },1000)

    console.log("Component Did Mount");
  }

  componentDidUpdate(){
    console.log("Component Did Update");
  }

  componentWillUnmount(){
    clearInterval(this.timer)
    console.log("Component Will Unmounted")
  }
  render() {
    const { count} = this.state;
    console.log("JSX");
    return (
      <>
        <h1>Profile Class Components</h1>
        <h2>Name :{this.props.name}</h2>
        <h2>Tech :{this.props.tech}</h2>
        <h3>Count :{count}</h3>
        <img src={this.state.userInfo.avatar_url} alt="" />
        <h4>{this.state.userInfo.name}</h4>
        {/* <h4>{this.state.userInfo.login}</h4> */}

        {/* We can use the useContext like this */}
        <UserContext.Consumer>
          {(value)=>
            <h2 className="text-2xl text-amber-400 text-center">{value.user.name}</h2>
          }
        </UserContext.Consumer>
        
      </>
    );
  }
}

export default ProfileClass;
