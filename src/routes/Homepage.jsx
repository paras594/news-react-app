import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeaderGrid from "../components/HeaderGrid";
import TrendingSection from "../components/TrendingSection";
import Sources from "../components/Sources";
import Main from "../components/Main";
import Aside from "../components/Aside";

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
