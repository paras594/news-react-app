import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "./styles/Container";

import Navbar from "./components/Navbar";
import TopicsNav from "./components/TopicsNav";
import Homepage from "./routes/Homepage";
import ViewMore from "./routes/ViewMore";
import NewsPage from "./routes/NewsPage";
import SourceNews from "./routes/SourceNews";
import DomainNews from "./routes/DomainNews";
import CountryNews from "./routes/CountryNews";
import SearchResults from "./routes/SearchResults";
import CallFinishedErrorPage from "./routes/CallsFinishedErrorPage";

const App = () => {
	return (
		<Router>
			<Container>
				<Navbar />
				<TopicsNav />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/viewmore/:category" component={ViewMore} />
					<Route path="/news-content" component={NewsPage} />
					<Route path="/source/:source" component={SourceNews} />
					<Route path="/domain/:domain" component={DomainNews} />
					<Route path="/country/:countryCode" component={CountryNews} />
					<Route path="/search-results/:query" component={SearchResults} />
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
