import React,{useState, useEffect} from "react";
import "./App.css";
import ChatBot from "./Components/chatbot/ChatBot"
import firebase from './Components/firebase';
import ReactSpinner from 'react-bootstrap-spinner';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App_Hooks () {
        
     
     const [steps_, setStep] = useState([])
     const [mode, setMode] = useState("grey")
    
     
        
       useEffect(() => {
         const eventRef=firebase.database().ref('events');
      const mounted = eventRef.on('value', (snapshot) => {
          let events = snapshot.val();
          let newState=[];
          for(let eve in events){
              newState.push(events[eve])
          }
          setStep(newState)
          }
          );
     
       return () => {
    mounted()
  }},[])
  
    if(steps_.length===0){
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
      return (
        <div>
        <button onClick={() => mode === "grey" ? setMode("white") : setMode("grey") }> Mode</button>
      <ChatBot steps={steps_} mode = {mode}/>
      </div>);
    }
  }


export default App_Hooks;
