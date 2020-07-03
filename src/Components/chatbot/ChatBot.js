import React,{ useState } from 'react';
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import '../../index.css'
import Review from './MakeTable';
import Image from 'react-bootstrap/Image'
import { Button } from '@material-ui/core';
import { renderToString } from 'react-dom/server';
import {isBrowser, isTablet, BrowserView, MobileOnlyView, TabletView} from 'react-device-detect';

function CustomChatbot(props) {
  
  const style = {
    margin: 3,
    top: 0,
    right: 0,
    bottom: "auto",
    left: 'auto',
    position: 'fixed',
  };
  
  // [1:background color, 2:messageBubble, 3: fontColor, 4: headerColor, 5: userMessage, 6: tableColor]
  const [mode, setMode] = useState(["#344152", "#687C97	", "white", "#2E37FE", "#380474", "light"])
  const [variant, setVariant] = useState(['primary', "Light Mode"])
  
  const headerComponent=(
    <div style={{"backgroundColor": mode[3]}}>
      <h4 style={{color:"white", padding: 0.3 +'em'}}>Wise Chatbot</h4>
      <Button
        style={style}
        variant="contained" color={variant[0]}
        onClick={() => mode[2]==="white"? 
        (setMode(["#CAD0D0", "#F1F3F3", "black", "#162252", "#CAE1FF", "dark"]), setVariant(['default', 'Dark Mode'])):
        (setMode(["#344152", "#687C97	", "white", "#2E37FE", "#380474", "light"]), setVariant(['primary', 'Light Mode']))}
        >{variant[1]}</Button>
    </div>
  )
  var config={}
  if(isTablet){
    config = {
      width: "100%",
      height: "95vh",
      // floating: true
    };
  }
  else if(isBrowser){
    config = {
      width: "100%",
      height: "100vh",
      // floating: true
    };
  }
  else{
    config = {
      width: "100%",
      height: "80vh",
      // floating: true
    };
  }

  const theme = {
    background: mode[0],
    fontFamily: "Arial, Helvetica, sans-serif",
    // headerBgColor: props.mode[3],
    // headerFontColor: "#fff",
    headerFontSize: "25px",
    botBubbleColor: mode[1],
    botFontColor: mode[2],
    userBubbleColor: mode[4],
    userFontColor: mode[2],
  };
  
  var steps=props.steps;
  const REV=renderToString(<span role="img" aria-label="wave" className="wave" >👋</span>);
  var local_steps=[
    {
      "id": "Name",
      "user": true,
      "trigger": "3",
      "validator": (value) => {
        if (value==="") {
          return 'Please Enter your Name!';
        }
        return true;
      }
    },
    {
      "id": "Feedback",
      "user": true,
      "trigger": "display",
      "validator": (value) => {
        if (value==="") {
          return 'Please Enter a Feedback!';
        }
        return true;
      }
    },
    {
      "id": "review",
      "component": <Review steps={steps} mode={props.mode}/>,
      "asMessage": true,
      "trigger": "thankyou",
      "hideInput": true
    },
    {
      "id": "4.1",
      "component": <Image id="imgs" fluid rounded src="https://media1.giphy.com/media/XZaiQf3IfMcLoXjqmt/giphy.gif" alt="REVIEW TIME" />,
      "asMessage": true,
      "trigger": "5",
      "hideInput": true
    },
    {
      "id": "5.1",
      "component": < Image id="imgs" fluid rounded src="https://i.gifer.com/3S7I.gif" alt="REVIEW TIME" />,
      "asMessage": true,
      "trigger": "Food Rating",
      "hideInput": true
    },
    {
      "id": "6.1",
      "component": < Image id="imgs" fluid rounded src="https://i.pinimg.com/originals/62/52/69/625269cb5d94ef1bb466c90c8ce00512.gif" alt="REVIEW TIME" />,
      "asMessage": true,
      "trigger": "Ambiance Rating",
      "hideInput": true
    },
    {
      "id": "7.1",
      "component": < Image id="imgs" fluid rounded src="https://thumbs.gfycat.com/AmpleClassicGermanwirehairedpointer-small.gif" alt="REVIEW TIME" />,
      "asMessage": true,
      "trigger": "Punctuality Rating",
      "hideInput": true
    },
    {
      "id": "8.1",
      "component": < Image id="imgs" fluid rounded src="https://49.media.tumblr.com/a9501c0bb44b44306a621e0a0db47a15/tumblr_o3kqi9gqTl1sz0dmro1_500.gif" alt="REVIEW TIME" />,
      "asMessage": true,
      "trigger": "Satisfied",
      "hideInput": true
    },
    {
      "id": "10.1",
      "component": < Image id="imgs" fluid rounded src="https://media3.giphy.com/media/fA81FF4mdE6lgeoJwb/giphy.gif" alt="REVIEW TIME" />,
      "asMessage": true,
      "trigger": "positive",
      "hideInput": true
    },
    {
      "id": "pre-ending",
      "component": < Image id="imgs" fluid rounded src="https://cdn.guff.com/site_1/media/14000/13511/items/2fc3d680ddf3e4f0279fa3e0.jpg" alt="REVIEW TIME" />,
      "asMessage": true,
      "trigger": "meta-ending",
      "hideInput": true
    },
    {
      "id": "wave",
      "component": (
        <div dangerouslySetInnerHTML={{__html:REV}}></div>
      ),
      "asMessage": true,
      "trigger": "1",
      "hideInput": true
    },
    {
      "id": "ending",
      "component": (
        <div>
          <p><span role="img" aria-label="wave" className="wave" >👋</span>The conversation is over<span role="img" aria-label="wave" className="wave" >👋</span></p>
        </div>
      ),
      "hideInput": true,
      "end": true
    }
  ];
  steps=steps.concat(local_steps);
  return (
    <>
    <BrowserView>
      <ThemeProvider theme={theme}>
        <ChatBot 
        enableMobileAutoFocus="true" 
        botDelay="500" 
        enableSmoothScroll="true" 
        botAvatar="https://miro.medium.com/max/525/1*lyyXmbeoK5JiIBNCnzzjjg.png" userAvatar="https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-5-512.png" 
        // headerTitle="Wise Chatbot" 
        steps={steps} 
        {...config}
        headerComponent={headerComponent}
        />
      </ThemeProvider>
    </BrowserView>
    <MobileOnlyView>
      <ThemeProvider theme={theme}>
        <ChatBot 
        enableMobileAutoFocus="true" 
        botDelay="500" 
        enableSmoothScroll="true" 
        botAvatar="https://miro.medium.com/max/525/1*lyyXmbeoK5JiIBNCnzzjjg.png" userAvatar="https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-5-512.png" 
        // headerTitle="Wise Chatbot" 
        steps={steps} 
        contentStyle={config}
        headerComponent={headerComponent}
        />
      </ThemeProvider>
    </MobileOnlyView>
    <TabletView>
      <ThemeProvider theme={theme}>
        <ChatBot 
        enableMobileAutoFocus="true" 
        botDelay="500" 
        enableSmoothScroll="true" 
        botAvatar="https://miro.medium.com/max/525/1*lyyXmbeoK5JiIBNCnzzjjg.png" userAvatar="https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-5-512.png" 
        // headerTitle="Wise Chatbot" 
        steps={steps} 
        {...config}
        headerComponent={headerComponent}
        />
      </ThemeProvider>
    </TabletView>
    </>
  );
}

export default CustomChatbot;
