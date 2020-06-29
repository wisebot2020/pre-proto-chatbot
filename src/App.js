import React,{useState, useEffect} from "react";
import "./App.css";
import ChatBot from "./Components/chatbot/ChatBot"
import firebase from './Components/firebase';
import ReactSpinner from 'react-bootstrap-spinner';

function App () {
  
  const [steps_, setStep] = useState([])

  useEffect(() => {
    const eventRef=firebase.database().ref('feedback');
      const mounted = eventRef.on('value', (snapshot) => {
        let events = snapshot.val();
        setStep(events);
      });
      const visitedFeedback=firebase.database().ref('feedback-visited');
      const temp={visited: true};
      visitedFeedback.push(temp);
     
    return () => {
      mounted()
    }},[])
    if(steps_.length===0){
      return (
        <div className="main-content">
          <ReactSpinner type="grow" color="primary" size="7" />
        </div>
      )
    }
    else {
      return (
        <div>
          <ChatBot steps={steps_} />          
        </div>
      );
    }
  }


export default App;
