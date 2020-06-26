#### firebase.js is to be created in here

### App.js:

`.....`

`import firebase from './Components/firebase';`

`.....`

### firebase.js
`-----------------------------------------------------------------`
<br />
  import firebase from "firebase";<br />
  var firebaseConfig = {<br />
      apiKey: "XXXXX",<br />
      authDomain: "XXXXX.firebaseapp.com",<br />
      databaseURL: "https://XXXXXX.firebaseio.com",<br />
      projectId: "XXXXXXX",<br />
      storageBucket: "XXXXXXXXX.appspot.com",<br />
      messagingSenderId: "XXXXXXXXXXXX",<br />
  };<br />
<br />
  firebase.initializeApp(firebaseConfig);<br />
  export default firebase;<br />
<br />
`-----------------------------------------------------------------`
