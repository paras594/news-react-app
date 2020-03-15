import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "./styles/Container";

import Navbar from "./components/Navbar";
import TopicsNav from "./components/TopicsNav";
import Homepage from "./routes/Homepage";
import CategoryNews from "./routes/CategoryNews";
import NewsPage from "./routes/NewsPage";
import SourceNews from "./routes/SourceNews";
import DomainNews from "./routes/DomainNews";
import CountryNews from "./routes/CountryNews";
import SearchNews from "./routes/SearchNews";
import CallFinishedErrorPage from "./routes/CallsFinishedErrorPage";

const App = () => {
	return (
		<Router>
			<Container>
				<Navbar />
				<TopicsNav />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/category/:category" component={CategoryNews} />
					<Route path="/news-content" component={NewsPage} />
					<Route path="/source/:source" component={SourceNews} />
					<Route path="/domain/:domain" component={DomainNews} />
					<Route path="/country/:countryCode" component={CountryNews} />
					<Route path="/search-results/:query" component={SearchNews} />
					<Route
						path="/calls-finished"
						component={CallFinishedErrorPage}
					/>
				</Switch>
			</Container>
		</Router>
	);
};

export default App;
