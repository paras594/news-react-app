import React, { useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import countryCodeMap from "../utility/countryCodeMap";
import ArticlesAsideContainer from "../components/ArticlesAsideContainer";
import fetchArticlesData from "../redux/actions/fetchArticlesData";
import Loader from "../components/Loader";

const CountryNews = () => {
	const params = useParams();
	const { countryCode } = params;
	const pageSize = 100;
	const url = `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${
		process.env.API_KEY
	}`;
	const newsState = useSelector(state => state.news);
	const {
		isLoading,
		articlesData,
		hasError,
		featuredData,
		totalArticles,
	} = newsState;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchArticlesData(url, pageSize));
	}, [countryCode]);

	if (hasError) return <Redirect to="/calls-finished" />;
	if (isLoading || featuredData.length < 1 || articlesData.length < 1)
		return <Loader />;

	return (
		<ArticlesAsideContainer
			totalData={totalArticles}
			title={`${countryCodeMap[countryCode]} Top Headlines`}
			articlesData={articlesData}
			asideData={featuredData}
			hasError={hasError}
		/>
	);
};

export default CountryNews;
