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
		const dateFormat = "EEE dd LLL";

		// check if date is valid
		if (isValid(props.currentDate) && isValid(props.selectedDate)) {
			// returns each day of date range
			const daysInterval = eachDayOfInterval({
				start: props.currentDate,
				end: props.selectedDate
			});

			// format days and change them to DOM elements
			const days = daysInterval
				.slice(props.visibleDates - 4, props.visibleDates)
				.map((day) => {
					return (
						<Col lg={2} className="date-title">
							{format(day, dateFormat)}
						</Col>
					);
				});

			// used React.Fragment to remove excess div wrapping
			return <React.Fragment>{days}</React.Fragment>;
		}
	}

	// function to render available times
	function renderSlots() {
		const slots = props.workingHours
			.slice(0, props.visibleSlots)
			.map((hour) => {
				return <button className="time-slot mr-3 mt-3">{hour}</button>;
			});
		if (props.visibleSlots === 5) {
			return (
				<Col lg={2}>
					{slots}
					<button className="time-slot mr-3 mt-3" onClick={props.loadSlots}>
						MORE
					</button>
				</Col>
			);
		} else {
			return <Col lg={2}>{slots}</Col>;
		}
	}

	return (
		<Container fluid>
			<Row className="scheduler-title">
				<Col lg={12}>
					<h5 className="mt-2"> Schedule your session! </h5>
					<p className="mt-1 mb-2"> Timezone: Lisbon(+1) </p>
				</Col>
			</Row>

			<Row className="dates-scheduler pt-3 pb-3">
				<Col lg={2}>
					<button
						className="arrow-btn arrow-left"
						onClick={props.loadPrevDates}></button>
				</Col>
				{renderDays()}

				<Col lg={2}>
					<button
						className="arrow-btn arrow-right"
						onClick={props.loadNextDates}></button>
				</Col>
			</Row>
			<Row className="appointments mt-5 pb-3 ">
				<Col lg={2}></Col>
				{renderSlots()}
				{renderSlots()}
				{renderSlots()}
				{renderSlots()}
				<Col lg={2}></Col>
			</Row>
		</Container>
	);
}

export default Scheduler;
