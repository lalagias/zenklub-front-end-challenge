import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Profile from "./components/Profile/Profile";
import Scheduler from "./components/Scheduler/Scheduler";
import API from "./utils/API";
import "./App.css";

class App extends Component {
  state = {
    // Holds all information regarding the profile and the scheduler
    profile: {},
    scheduler: {}
  };

  // Invoke function when component render
  componentDidMount() {
    this.getProfile();
  }

  getProfile = () => {
    API.getProfile(1)
      .then(results => {
        let profile = results.data;
        this.setState({ profile }, () => {
          console.log(this.state);
        });
      })
      .catch(error => {
        if (error) throw error;
      });
  };

  render() {
    return (
      <Container className="App">
        <Row>
          <Col sm={6}>
            <Profile profile={this.state.profile} />
          </Col>
          <Col sm={6}>
            <Scheduler />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
