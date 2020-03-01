import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "./styles/Container";

import Navbar from "./components/Navbar";
import TopicsNav from "./components/TopicsNav";
import Homepage from "./routes/Homepage";
import ViewMore from "./routes/ViewMore";
import NewsPage from "./routes/NewsPage";

const App = () => {
	console.log(process.env.API_KEY);
	return (
		<Router>
			<Container>
				<Navbar />
				<TopicsNav />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/viewmore" component={ViewMore} />
					<Route path="/news-content" component={NewsPage} />
				</Switch>
			</Container>
		</Router>
	);
};

export default App;
