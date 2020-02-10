import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { format, eachDayOfInterval, isValid } from "date-fns";

import "./Scheduler.css";

function Scheduler(props) {
	console.log("props scheduler", props);
	console.log(isValid(props.selectedDate));

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
			const days = daysInterval.map((day) => {
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
				<Col lg={1}>
					<button className="arrow-btn arrow-left"></button>
				</Col>

				{renderDays()}

				<Col lg={1}>
					<button className="arrow-btn arrow-right"></button>
				</Col>
			</Row>

			<Row className="appointments mt-5">
				{renderSlots()}
				<Col lg={1}></Col>
				<Col lg={2} className="mr-3 mt-3">
					<a className="time-slot">8:30</a>
				</Col>
				<Col lg={2} className="mr-3 mt-3">
					<a className="time-slot">8:30</a>
				</Col>
				<Col lg={2} className="mr-3 mt-3">
					<a className="time-slot">8:30</a>
				</Col>
				<Col lg={2} className="mr-3 mt-3">
					<a className="time-slot">8:30</a>
				</Col>
				<Col lg={1}></Col>
				<Col lg={1}></Col>
				<Col lg={2} className="mr-3 mt-3">
					<a className="time-slot">8:30</a>
				</Col>
				<Col lg={2} className="mr-3 mt-3">
					<a className="time-slot">8:30</a>
				</Col>
				<Col lg={2} className="mr-3 mt-3">
					<a className="time-slot">8:30</a>
				</Col>
				<Col lg={2} className="mr-3 mt-3">
					<a className="time-slot">8:30</a>
				</Col>
				<Col lg={1}></Col>
				<Col lg={1}></Col>
				<Col lg={2} className="mr-3 mt-3">
					<a className="time-slot">8:30</a>
				</Col>
				<Col lg={2} className="mr-3 mt-3">
					<a className="time-slot">8:30</a>
				</Col>
				<Col lg={2} className="mr-3 mt-3">
					<a className="time-slot">8:30</a>
				</Col>
				<Col lg={2} className="mr-3 mt-3">
					<a className="time-slot">8:30</a>
				</Col>
				<Col lg={1}></Col>
				<Col lg={1}></Col>
				<Col lg={2} className="mr-3 mt-3">
					<a className="time-slot">8:30</a>
				</Col>
				<Col lg={2} className="mr-3 mt-3">
					<a className="time-slot">8:30</a>
				</Col>
				<Col lg={2} className="mr-3 mt-3">
					<a className="time-slot">8:30</a>
				</Col>
				<Col lg={2} className="mr-3 mt-3">
					<a className="time-slot">8:30</a>
				</Col>
				<Col lg={1}></Col>
				<Col lg={1}></Col>
				<Col lg={2} className="mr-3 mt-3">
					<a className="time-slot">8:30</a>
				</Col>
				<Col lg={2} className="mr-3 mt-3">
					<a className="time-slot">8:30</a>
				</Col>
				<Col lg={2} className="mr-3 mt-3">
					<a className="time-slot">8:30</a>
				</Col>
				<Col lg={2} className="mr-3 mt-3">
					<a className="time-slot">8:30</a>
				</Col>
				<Col lg={1}></Col>
				<Col lg={1}></Col>
				<Col lg={2} className="mr-3 mt-3">
					<a className="time-slot">8:30</a>
				</Col>
				<Col lg={2} className="mr-3 mt-3">
					<a className="time-slot">8:30</a>
				</Col>
				<Col lg={2} className="mr-3 mt-3">
					<a className="time-slot">8:30</a>
				</Col>
				<Col lg={2} className="mr-3 mt-3">
					<a className="time-slot">8:30</a>
				</Col>
				<Col lg={1}></Col>
				<Col lg={1}></Col>
				<Col lg={2} className="mr-3 mt-3">
					<a className="time-slot">MORE</a>
				</Col>
				<Col lg={2} className="mr-3 mt-3">
					<a className="time-slot">MORE</a>
				</Col>
				<Col lg={2} className="mr-3 mt-3">
					<a className="time-slot">MORE</a>
				</Col>
				<Col lg={2} className="mr-3 mt-3">
					<a className="time-slot">MORE</a>
				</Col>
				<Col lg={1}></Col>
			</Row>
		</Container>
	);
}

export default Scheduler;
