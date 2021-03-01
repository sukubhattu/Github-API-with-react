import React, { Component } from "react";

import "./App.css";
import axios from "axios";

// Import navbar
import Navbar from "./components/layout/Navbar";

// Import user
import Users from "./components/users/Users";

export class App extends Component {
	state = {
		users: [],
		loading: false,
	};
	async componentDidMount() {
		// Setting state of loading to true
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/users?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRETS}`
		);
		this.setState({ users: res.data, loading: false });
	}
	render() {
		const nameOfProject = "Github Users";
		const icon = "fab fa-github";
		// console.log(this.state);
		return (
			<div className="App">
				<Navbar title={nameOfProject} icon={icon}></Navbar>
				<div className="container">
					<Users loading={this.state.loading} users={this.state.users} />
				</div>
			</div>
		);
	}
}

export default App;
