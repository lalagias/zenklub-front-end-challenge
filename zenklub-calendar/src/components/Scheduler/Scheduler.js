import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { format, eachDayOfInterval, isValid } from "date-fns";

import "./Scheduler.css";

function Scheduler(props) {
	console.log("props scheduler", props);
	console.log(isValid(props.selectedDate));
	let days;

	// function to render days
	function renderDays() {
		console.log("renderDays");
		// date formatter
		const dateFormat = "EEE LL LLL";

		// check if date is valid
		if (isValid(props.currentDate) && isValid(props.selectedDate)) {
			// returns each day of date range
			const daysInterval = eachDayOfInterval({
				start: props.currentDate,
				end: props.selectedDate
			});

			// format days and change them to DOM elements
			let days = daysInterval.map((day) => {
				return (
					<Col lg={2} className="date-title mr-3">
						{format(day, dateFormat)}
					</Col>
				);
			});

			// used React.Fragment to remove excess div wrapping
			return <React.Fragment>{days}</React.Fragment>;
		}
	}

	// function to render available times
	function renderSlots() {}

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
				{renderDays()}
				{/* {days} */}

				{/* <Col lg={2} className="date-title mr-3">
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
				</Col> */}

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
