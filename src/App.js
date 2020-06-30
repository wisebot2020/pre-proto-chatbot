import React,{useState, useEffect} from "react";
import "./App.css";
import ChatBot from "./Components/chatbot/ChatBot"
import firebase from './Components/firebase';
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";

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
        <div>
          <div className="main-content" style = {{background : "grey"}}>
            <h1 style={{color: "white"}}>Hiii, I'm wise Chatbot! I'll talk to you in a moment!</h1>
          </div>
          <br />
          <br />
          <br />
          <div className = "main-content">
            <ReactLoading type={"bubbles"} color={"blue"} height={200} width={200} />
            <img src = "https://miro.medium.com/max/525/1*lyyXmbeoK5JiIBNCnzzjjg.png" height = "150px" width = "150px"  alt = "Assistant"/>
            <ReactLoading type={"bubbles"} color={"blue"} height={200} width={200} />
          </div>
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
