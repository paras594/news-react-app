import React from "react";
import styled from "styled-components";

import Container from "./styles/Container";

import Navbar from "./components/Navbar";
import TopicsNav from "./components/TopicsNav";
import HeaderGrid from "./components/HeaderGrid";
import TrendingSection from "./components/TrendingSection";
import Sources from "./components/Sources";
import Main from "./components/Main";
import Aside from "./components/Aside";

const FlexContainer = styled.section`
	display: flex;
`;

const App = () => {
	return (
		<Container>
			<Navbar />
			<TopicsNav />
			<HeaderGrid />
			<TrendingSection />
			<Sources />
			<FlexContainer>
				<Main />
				<Aside />
			</FlexContainer>
		</Container>
	);
};

export default App;
