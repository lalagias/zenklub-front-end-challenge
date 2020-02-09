import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { format, addDays } from "date-fns";

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
		dates: {},
		// holds the current date each time the app is rendered
		currentDate: new Date(),
		// for the purpose of the task, this property is the last day of the scheduler
		selectedDate: {},
		// Working hours of doctor, with 1 hour appointments (meaning 8 appointments)
		startingHour: 9,
		endingHour: 17
	};

	// Invoke function when component render
	componentDidMount() {
		this.getProfile();
		this.getDates();
		this.setSelectedDate();
		// this.renderDays();
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
				let dates = results.data;
				this.setState({ dates }, () => {
					console.log(this.state.dates);
				});
			})
			.catch((error) => {
				if (error) throw error;
			});
	};

	// Add 30 days from current date and change state
	setSelectedDate = () => {
		let selectedDate = addDays(this.state.currentDate, 4);
		this.setState({ selectedDate }, console.log(selectedDate));
	};

	// Render the days
	renderDays = () => {
		const dateFormat = "EEE LL LLL";
		// let currentDateAbbr = format(this.state.currentDate, dateFormat);
		// let selectedDate = format(this.state.currentDate, dateFormat);
		// this.setState({ currentDateAbbr });
		// console.log(currentDateAbbr);
		let dates = [];

		while (this.state.currentDate < this.state.selectedDate) {
			let i = 1;
			let date = addDays(this.state.currentDate, i);
			dates.push(date);
			i++;
		}

		this.setState({ dates });
	};

	render() {
		return (
			<Container className="App mt-5">
				<Row>
					<Col sm={6}>
						<Profile profile={this.state.profile} />
					</Col>
					<Col sm={6}>
						<Scheduler renderDays={this.renderDays} dates={this.state.dates} />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default App;
