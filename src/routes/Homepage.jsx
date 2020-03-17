import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import HeaderGrid from "../components/HeaderGrid";
import TrendingSection from "../components/Trending/TrendingSection";
import Sources from "../components/Sources";
import Main from "../components/Main/Main";
import Aside from "../components/Aside/Aside";
import fetchHomepageData from "../redux/actions/fetchHomepageData.js";

const FlexContainer = styled.section`
	display: flex;
`;

const Homepage = () => {
	const newsState = useSelector(state => state.news);
	const {
		isLoading,
		headerData,
		trendingData,
		featuredData,
		mainRes,
		hasError,
	} = newsState;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchHomepageData());
	}, []);

	if (hasError) return <Redirect to="/calls-finished" />;
	if (
		isLoading ||
		headerData.length < 1 ||
		trendingData.length < 1 ||
		mainRes.length < 1 ||
		featuredData.length < 1
	)
		return <h1>Loader</h1>;

	return (
		<>
			<HeaderGrid data={headerData} />
			<TrendingSection data={trendingData} />
			<Sources />
			<FlexContainer>
				<Main response={mainRes} />
				<Aside data={featuredData} />
			</FlexContainer>
		</>
	);
};

export default Homepage;
