import React,{useState, useEffect} from "react";
import "./App.css";
import ChatBot from "./Components/chatbot/ChatBot"
import firebase from './Components/firebase';
import ReactSpinner from 'react-bootstrap-spinner';
import { Button } from '@material-ui/core';

function App () {

  const style = {
      margin: 0,
      top: "auto",
      right: 0,
      bottom: 0,
      left: 'auto',
      position: 'fixed',
  };
  const [steps_, setStep] = useState([])
  //[1:background color, 2:messageBubble, 3: fontColor, 4: headerColor, 5: userMessage, 6: tableColor]
  const [mode, setMode] = useState(["#344152", "#687C97	", "white", "#2E37FE", "#380474", "light"])
  const [variant, setVariant] = useState(['primary', "Light Mode"])
  useEffect(() => {
    const eventRef=firebase.database().ref('feedback');
      const mounted = eventRef.on('value', (snapshot) => {
        let events = snapshot.val();
        setStep(events);
      });
     
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
          <Button 
            style={style} 
            variant="contained" color={variant[0]}
            onClick={() => mode[2]==="white"? 
              (setMode(["#CAD0D0", "#F1F3F3", "black", "#162252", "#CAE1FF", "dark"]), setVariant(['default', 'Dark Mode'])):
              (setMode(["#344152", "#687C97	", "white", "#2E37FE", "#380474", "light"]), setVariant(['primary', 'Light Mode']))}
          >{variant[1]}</Button>
          <ChatBot steps={steps_} mode = {mode}/>
        </div>
      );
    }
  }


export default App;