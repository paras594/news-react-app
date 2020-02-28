import React from "react";
import styled from "styled-components";
import HeaderGrid from "../components/HeaderGrid";
import TrendingSection from "../components/Trending/TrendingSection";
import Sources from "../components/Sources";
import Main from "../components/Main/Main";
import Aside from "../components/Aside/Aside";

const FlexContainer = styled.section`
	display: flex;
`;

const Homepage = () => {
	return (
		<>
			<HeaderGrid />
			<TrendingSection />
			<Sources />
			<FlexContainer>
				<Main />
				<Aside />
			</FlexContainer>
		</>
	);
};

export default Homepage;
