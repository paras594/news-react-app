import React from "react";
import styled from "styled-components";

import Container from "./styles/Container";

import Navbar from "./components/Navbar";
import TopicsNav from "./components/TopicsNav";
import Homepage from "./routes/Homepage";

const App = () => {
	console.log(process.env.API_KEY);
	return (
		<Container>
			<Navbar />
			<TopicsNav />
			<Homepage />
		</Container>
	);
};

export default App;
