import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import HeaderGrid from "../components/HeaderGrid";
import TrendingSection from "../components/Trending/TrendingSection";
import Sources from "../components/Sources";
import Main from "../components/Main/Main";
import Aside from "../components/Aside/Aside";
import getHomepageData from "../utility/getHomepageData";

const FlexContainer = styled.section`
	display: flex;
`;

const Homepage = () => {
	const [headerData, setHeaderData] = useState([]);
	const [trendingData, setTrendingData] = useState([]);
	const [featuredData, setFeaturedData] = useState([]);
	const [mainRes, setMainRes] = useState([]);
	const [hasError, setHasError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	async function getData() {
		setIsLoading(true);
		try {
			const {
				headerRes,
				trendingRes,
				featuredRes,
				mainRes,
			} = await getHomepageData();

			setHeaderData(headerRes.data);
			setTrendingData(trendingRes.data);
			setFeaturedData(featuredRes.data);
			setMainRes(mainRes);
			setIsLoading(false);
		} catch (err) {
			console.log(err);
			setIsLoading(false);
			setHasError(true);
		}
	}

	useEffect(() => {
		getData();
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
