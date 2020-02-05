import React, { Component } from "react";
import Profile from "./components/Profile";
import Scheduler from "./components/Scheduler";
import "./App.css";

class App extends Component {
  state = {
    // Holds all information regarding the profile and the scheduler
    profile: {},
    scheduler: {}
  };

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <Profile />
        <Scheduler />
      </div>
    );
  }
}

export default App;
