import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { format } from "date-fns";

import "./Scheduler.css";

function Scheduler(props) {
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
				{props.dates
					.slice(props.visibleDates - 4, props.visibleDates)
					.map((day, index) => (
						<Col key={index} lg={2} className="date-title">
							{format(day.date, "EEE dd LLL")}
						</Col>
					))}
				<Col lg={2}>
					<button
						className="arrow-btn arrow-right"
						onClick={props.loadNextDates}></button>
				</Col>
			</Row>
			<Row className="appointments mt-5 pb-3 ">
				<Col lg={2}></Col>
				{props.dates
					.slice(props.visibleDates - 4, props.visibleDates)
					.map((day, index) => (
						<Col key={index} lg={2}>
							{props.visibleSlots === 5
								? day.time
										.slice(0, props.visibleSlots)
										.map((hour) => (
											<button className="time-slot mr-3 mt-3">{hour}</button>
										))
								: day.time
										.slice(0, props.visibleSlots)
										.map((hour) => (
											<button className="time-slot mr-3 mt-3">{hour}</button>
										))}
							{props.visibleSlots === 5 ? (
								<button
									className="time-slot mr-3 mt-3"
									onClick={props.loadSlots}>
									MORE
								</button>
							) : null}
						</Col>
					))}
				<Col lg={2}></Col>
			</Row>
		</Container>
	);
}

export default Scheduler;
