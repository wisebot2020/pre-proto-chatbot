import React from 'react';
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
    background: props.mode[0],
    fontFamily: "Arial, Helvetica, sans-serif",
    headerBgColor: props.mode[3],
    headerFontColor: "#fff",
    headerFontSize: "25px",
    botBubbleColor: props.mode[1],
    botFontColor: props.mode[2],
    userBubbleColor: props.mode[4],
    userFontColor: props.mode[2],
  };

  var steps=props.steps;
  var local_steps=[
    {
      "id": "review",
      "component": <Review steps={steps} mode={props.mode}/>,
      "asMessage": true,
      "trigger": "thankyou"
    },
    {
      "id": "4.1",
      "component": <img class="imgAsMsg" src="https://media1.giphy.com/media/XZaiQf3IfMcLoXjqmt/giphy.gif" alt="REVIEW TIME" />,
      "asMessage": true,
      "trigger": "5"
    },
    {
      "id": "5.1",
      "component": <img class="imgAsMsg" src="https://i.gifer.com/3S7I.gif" alt="REVIEW TIME" />,
      "asMessage": true,
      "trigger": "food"
    },
    {
      "id": "6.1",
      "component": <img class="imgAsMsg" src="https://i.pinimg.com/originals/62/52/69/625269cb5d94ef1bb466c90c8ce00512.gif" alt="REVIEW TIME" />,
      "asMessage": true,
      "trigger": "ambiance"
    },
    {
      "id": "7.1",
      "component": <img class="imgAsMsg" src="https://thumbs.gfycat.com/AmpleClassicGermanwirehairedpointer-small.gif" alt="REVIEW TIME" />,
      "asMessage": true,
      "trigger": "punctuality"
    },
    {
      "id": "8.1",
      "component": <img class="imgAsMsg" src="https://49.media.tumblr.com/a9501c0bb44b44306a621e0a0db47a15/tumblr_o3kqi9gqTl1sz0dmro1_500.gif" alt="REVIEW TIME" />,
      "asMessage": true,
      "trigger": "happy"
    },
    {
      "id": "10.1",
      "component": <img class="imgAsMsg" src="https://media3.giphy.com/media/fA81FF4mdE6lgeoJwb/giphy.gif" alt="REVIEW TIME" />,
      "asMessage": true,
      "trigger": "positive"
    },
    {
      "id": "pre-ending",
      "component": <img class="imgAsMsg" src="https://cdn.guff.com/site_1/media/14000/13511/items/2fc3d680ddf3e4f0279fa3e0.jpg" alt="REVIEW TIME" />,
      "asMessage": true,
      "trigger": "ending"
    },
    {
      "id": "wave",
      "component": (
        <div>
          <span role="img" aria-label="wave" className="wave" >👋</span>
        </div>
      ),
      "asMessage": true,
      "trigger": "1"
    }
  ];
  steps=steps.concat(local_steps);
  return (
    <ThemeProvider theme={theme}>
      <ChatBot enableSmoothScroll="true" userAvatar="https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-5-512.png" headerTitle="Wise Chatbot" steps={steps} {...config} />
    </ThemeProvider>
  );
}

export default CustomChatbot;