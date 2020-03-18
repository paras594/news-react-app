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
import Loader from "../components/Loader";

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

	if (isLoading) return <Loader />;
	if (hasError) return <Redirect to="/calls-finished" />;

	return (
		<>
			<HeaderGrid articles={headerData} />
			<TrendingSection articles={trendingData} />
			<Sources />
			<FlexContainer>
				<Main response={mainRes} />
				<Aside articles={featuredData} />
			</FlexContainer>
		</>
	);
};

export default Homepage;
