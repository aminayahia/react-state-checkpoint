import logo from './logo.svg';
import './App.css';

import React from "react";
class App extends React.Component {
//.bind cad App
  /*constructor(props) {
    super(props);
    this.toggleContent = this.toggleContent.bind(this);
    this.state ={
      show: true
    }
  }*/
  constructor(props){
    super(props);

    this.state = {
         show : false ,
         date: new Date()
    }
}

 Person = { 
   fullName:"amiina",
   bio:"bio", 
   imgSrc: {logo}, 
   profession:"profession"
  }
toggleContent=()=>{
   
  this.setState({ show : !this.state.show });
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

 render() {

   return <>
        <button onClick={this.toggleContent}>
          {this.state.show? 'Hide Button' : 'Show Button'}
        </button>
        <div>
           {this.state.show && <p><span>FullName : </span>{this.Person.fullName}
           <br/><span>FullName : </span>{this.Person.bio}
           <br/><span>profession : </span>{this.Person.profession}
           <br/><img src={this.Person.imgSrc} alt="img" /></p>}

           <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>


  </>;
 }
}
export default App;