import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Container from "./styles/Container";

import Navbar from "./components/Navbar/Navbar";
import TopicsNav from "./components/TopicsNav/TopicsNav";
import Homepage from "./routes/Homepage";
import CategoryNews from "./routes/CategoryNews";
import SourceNews from "./routes/SourceNews";
import DomainNews from "./routes/DomainNews";
import CountryNews from "./routes/CountryNews";
import SearchNews from "./routes/SearchNews";
import ErrorPage from "./routes/ErrorPage";
import NoMatch from "./routes/NoMatch";
import Footer from "./components/Footer";

const Div = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const App = () => {
	return (
		<Router>
			<Div>
				<Container>
					<Navbar />
					<TopicsNav />
					<Switch>
						<Route exact path="/" component={Homepage} />
						<Route path="/category/:category" component={CategoryNews} />
						<Route path="/source/:source" component={SourceNews} />
						<Route path="/domain/:domain" component={DomainNews} />
						<Route path="/country/:countryCode" component={CountryNews} />
						<Route path="/search-results/:query" component={SearchNews} />
						<Route path="/error" component={ErrorPage} />
						<Route component={NoMatch} />
					</Switch>
				</Container>
				<Footer />
			</Div>
		</Router>
	);
};

export default App;
