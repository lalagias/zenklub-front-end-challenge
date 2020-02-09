import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Scheduler.css";

function Scheduler(props) {
	// function to render next dates
	function nextDays() {}

	// function to render previous dates
	function previousDays() {}

	return (
		<Container fluid>
			<Row className="scheduler-title">
				<Col lg={12}>
					<h5> Schedule your session! </h5>
					<p> Timezone: Lisbon(+1) </p>
				</Col>
			</Row>

			<Row className="dates-scheduler">
				<Col lg={1} className="">
					<button className="arrow left"></button>
				</Col>

				<Col lg={2} className="date-title mr-3">
					<p>MON 10 Feb</p>
				</Col>

				<Col lg={2} className="date-title mr-3">
					<p>TUE 11 Feb</p>
				</Col>

				<Col lg={2} className="date-title mr-3">
					<p>WED 12 Feb</p>
				</Col>

				<Col lg={2} className="date-title mr-3">
					<p>THU 13 Feb</p>
				</Col>

				<Col lg={1}>
					<button className="arrow-right"></button>
				</Col>
			</Row>

			<Row className="appointments">
				<Col></Col>
			</Row>
		</Container>
	);
}

export default Scheduler;
