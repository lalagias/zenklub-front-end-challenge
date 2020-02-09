import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Scheduler.css";

function Scheduler() {
	return (
		<Container fluid>
			<Row className="mb-5">
				<Col lg={6} className="scheduler-title">
					<h4> Schedule your session! </h4>
					<p> Timezone: Lisbon(+1) </p>
				</Col>
			</Row>
			<Row>
				<Col></Col>
			</Row>
		</Container>
	);
}

export default Scheduler;
