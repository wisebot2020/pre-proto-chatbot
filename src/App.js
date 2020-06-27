import React,{useState, useEffect} from "react";
import "./App.css";
import ChatBot from "./Components/chatbot/ChatBot"
import firebase from './Components/firebase';
import ReactSpinner from 'react-bootstrap-spinner';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function App () {
     
  const [steps_, setStep] = useState([])
  const [mode, setMode] = useState("grey")
  const [variant, setVariant] = useState(["outline-secondary", "Light Mode"])

  useEffect(() => {
    const eventRef=firebase.database().ref('events');
      const mounted = eventRef.on('value', (snapshot) => {
        let events = snapshot.val();
        setStep(events);
      });
     
    return () => {
      mounted()
    }},[])
    if(steps_.length===0){
      return (
        <div>
          <Row><br /><br /><br /><br /><br /><br /><br /><br /></Row>
          <Row>
            <Col></Col><Col></Col>
            <Col>
              <ReactSpinner type="grow" color="primary" size="7" />
            </Col>
            <Col></Col><Col></Col>
          </Row>
          <Row></Row>
        </div>
      )
    }
    else {
      return (
        <div>
          <Button 
            variant={variant[0]} 
            size="lg" 
            onClick={() => mode === "grey" ? 
              (setMode("white"), setVariant(["secondary", "Dark Mode"])) : 
              (setMode("grey"), setVariant(["light", "Ligth Mode"])) 
              } block>{variant[1]}</Button>
          <br /><ChatBot steps={steps_} mode = {mode}/>
        </div>
      );
    }
  }


export default App;