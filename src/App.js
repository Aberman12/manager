import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import LoginForm from "./components/LoginForm";
import Router from "./Router";
class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBM2fRh7IYNDVpwGGvRp2RBXh7fPrx7khI",
      authDomain: "manager-82555.firebaseapp.com",
      databaseURL: "https://manager-82555.firebaseio.com",
      projectId: "manager-82555",
      storageBucket: "manager-82555.appspot.com",
      messagingSenderId: "1057314647640"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <View>
          <Router />
        </View>
      </Provider>
    );
  }
}

export default App;
