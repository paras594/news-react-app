import React, { useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import countryCodeMap from "../utility/countryCodeMap";
import ArticlesAsideContainer from "../components/ArticlesAsideContainer";
import fetchArticlesData from "../redux/actions/fetchArticlesData";
import Loader from "../components/Loader";
import {
	selectArticlesAndAsideData,
	selectHasError,
	selectIsLoading,
} from "../redux/selectors/selectors";

const CountryNews = () => {
	const params = useParams();
	const { countryCode } = params;
	const pageSize = 100;
	const url = `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${
		process.env.API_KEY
	}`;
	const { featuredData, articlesData, totalArticles } = useSelector(
		selectArticlesAndAsideData
	);
	const isLoading = useSelector(selectIsLoading);
	const hasError = useSelector(selectHasError);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchArticlesData(url, pageSize));
	}, [countryCode]);

	if (isLoading) return <Loader />;
	if (hasError) return <Redirect to="/error" />;

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
