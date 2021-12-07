import { Component } from 'react';
import './App.css';
import Profile from "./Component/Profile"
class App extends Component {

 state={
   Person:{fullName:"Amani Issaoui",
  bio:"Hello,I am Full Js Web Developer",
  imgSrc:<img  className="image" src="./images/pic.jpg" alt="profile"/>,
  profession:"Web Developer"
},
 isShow:false,
 counter:0
 }
 handleClick=()=>{this.setState({isShow:!this.state.isShow})}
 componentDidMount(){
  this.interval= setInterval(() => {
    this.setState(prevState => {
      return {
      
        counter: prevState.counter + 1,
      };
    });
  }, 1000);
 }
 componentWillUnmount(){clearInterval(this.interval);

 }
  render() { 
    return <div>
<button onClick={this.handleClick}> {this.state.isShow?"Hide":"Show"}</button> 
<h1>{this.state.counter}</h1>
{this.state.isShow? <Profile person={this.state.Person}/>:""}
    </div>;
  }
}
 


export default App;
