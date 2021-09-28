
import firebase from 'firebase/app'
import './App.css';
import { Switch, Route } from "react-router-dom";

function App() {
  if(!firebase.apps.length){
    console.log('initializing firebase')
    firebase.initializeApp({
            apiKey: '',
            authDomain: "",
            projectId: "",
            storageBucket: "",
            messagingSenderId: "",
            appId: '',
            measurementId: ""
    })
    console.log('firebase initialized')
    // setFirebaseInit(true)
    // firebase.analytics();
  }
  return (
    <div className="App">
       <Switch>
          <Route  path="/home" component={Login}/>
          <Route exact path="/" render={() => <p>Landing</p>}/>
        </Switch>
    </div>
  );
}

export default App;
