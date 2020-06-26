import React, { Component } from "react";
import "./App.css";
import ChatBot from "./Components/chatbot/ChatBot"
import firebase from './Components/firebase';
import ReactSpinner from 'react-bootstrap-spinner';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          steps_: []
      }
  };

  componentDidMount() {
      const eventRef=firebase.database().ref('events');
      eventRef.on('value', (snapshot) => {
          let events = snapshot.val();
          let newState=[];
          for(let eve in events){
              newState.push(events[eve])
          }
          this.setState({
            steps_: newState
          });
        });
  }
  render() {
    if(this.state.steps_.length===0){
      // console.log('Still loading');
      return (
        <div>
          <Row><br /><br /><br /><br /><br /><br /><br /><br /></Row>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col>
              <ReactSpinner type="grow" color="primary" size="7" />
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
          <Row></Row>
        </div>
      )
    }
    else {
      // console.log(this.state.steps_);
      return <ChatBot steps={this.state.steps_} />;
    }
  }
}

export default App;