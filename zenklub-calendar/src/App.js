import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { addDays } from "date-fns";

import Profile from "./components/Profile/Profile";
import Scheduler from "./components/Scheduler/Scheduler";
import API from "./utils/API";
import "./App.css";

class App extends Component {
	state = {
		// Holds all information regarding the profile and the scheduler
		profile: {
			id: 1
		},
		unavailableDates: {},
		dates: {},
		// holds the current date each time the app is rendered
		currentDate: new Date(),
		// for the purpose of the task, this property is the last day of the scheduler
		selectedDate: null,
		// Working hours of doctor, with 30 minute appointments (meaning 16 appointments)
		startingHour: 9,
		endingHour: 17
	};

	// Invoke function when component render
	componentDidMount() {
		this.getProfile();
		this.getDates();
		this.setSelectedDate();
		console.log(this.state);
	}

	// Function to get Profile data and setState
	getProfile = () => {
		API.getProfile(this.state.profile.id)
			.then((results) => {
				let profile = results.data;
				this.setState({ profile }, () => {
					console.log(this.state);
				});
			})
			.catch((error) => {
				if (error) throw error;
			});
	};

	// Function to get Unavaible Dates & Time of doctor
	getDates = () => {
		API.getDates()
			.then((results) => {
				let unavailableDates = results.data;
				this.setState({ unavailableDates }, () => {
					console.log(this.state.unavailableDates);
				});
			})
			.catch((error) => {
				if (error) throw error;
			});
	};

	// Add 30 days from current date and change state
	setSelectedDate = () => {
		let selectedDate = addDays(this.state.currentDate, 3);
		this.setState({ selectedDate });
	};

	render() {
		return (
			<Container className="App mt-5">
				<Row>
					<Col sm={6}>
						<Profile profile={this.state.profile} />
					</Col>
					<Col sm={6}>
						<Scheduler
							// renderDays={this.renderDays}
							dates={this.state.dates}
							currentDate={this.state.currentDate}
							selectedDate={this.state.selectedDate}
						/>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default App;
