import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Profile.css";
import "../../style.css";

function Profile(props) {
  console.log("profile", props);
  console.log("profile", props.profile.name);
  return (
    <Container fluid>
      <Row className="mb-5">
        <Col md={4}>
          <img
            src={props.profile.avatar}
            alt="avatar"
            className="avatar-profile"
          ></img>
        </Col>
        <Col md={6}>
          <Row>
            <Col md={12}>
              <p className="name-profile">{props.profile.name}</p>
            </Col>
            <Col md={12}>
              <p className="job-profile">
                {props.profile.job}
                <span className="location-profile">
                  &nbsp;| {props.profile.location}
                </span>
              </p>
            </Col>
            <Col md={12}>
              <p className="stars-profile">
                <span className="icon-iconfinder-icon-11"></span>
                <span className="icon-iconfinder-icon-11"></span>
                <span className="icon-iconfinder-icon-11"></span>
                <span className="icon-iconfinder-icon-1"></span>
                <span className="icon-iconfinder-icon-1"></span>
                <span className="reviews-profile">
                  &nbsp;({props.profile.reviews} reviews)
                </span>
              </p>
            </Col>
            <Col md={12}>
              <p className="price-profile">
                R&#36;{props.profile.price}
                <span className="session-profile">
                  &nbsp;/ {props.profile.session} MINUTES
                </span>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <p className="description-profile">{props.profile.description}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
