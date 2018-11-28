import React from "react";
import { Scene, Router } from "react-native-router-flux";
import LoginForm from "./LoginForm";
import EmployeeList from "./components/EmployeeList";
const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
