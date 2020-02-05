import React, { Component } from "react";
import Profile from "./components/Profile";
import Scheduler from "./components/Scheduler";
import "./App.css";

class App extends Component {
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
