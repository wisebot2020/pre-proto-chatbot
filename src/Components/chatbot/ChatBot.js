import React, { Component } from 'react';
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import '../../index.css'
import Review from './MakeTable';

function CustomChatbot(props) {

  const config = {
    width: "100%",
    height: "590px",
    // floating: true
  };
  const theme = {
    background: props.mode,
    fontFamily: "Arial, Helvetica, sans-serif",
    headerBgColor: "#00B2B2",
    headerFontColor: "#fff",
    headerFontSize: "25px",
    botBubbleColor: "#00B2B2",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4c4c4c",
  };

  var steps=props.steps;
  steps.push(    {
    "id": "review",
    "component": <Review steps={steps}/>,
    "asMessage": true,
    "trigger": "thankyou"
  })

  return (
    <ThemeProvider theme={theme}>
      <ChatBot enableSmoothScroll="true" userAvatar="https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-5-512.png" headerTitle="Wise Chatbot" steps={steps} {...config} />
    </ThemeProvider>
  );
}

export default CustomChatbot;