import React, { useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ArticlesAsideContainer from "../components/ArticlesAsideContainer";
import fetchArticlesData from "../redux/actions/fetchArticlesData";
import Loader from "../components/Loader";
import {
	selectArticlesAndAsideData,
	selectHasError,
	selectIsLoading,
} from "../redux/selectors/selectors";

const SearchNews = () => {
	const params = useParams();
	const { query } = params;
	const pageSize = 100;
	const url = `https://newsapi.org/v2/everything?qInTitle=${query}&apiKey=${
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
	}, [query]);

	if (isLoading) return <Loader />;
	if (hasError) return <Redirect to="/error" />;

	return (
		<ArticlesAsideContainer
			totalData={totalArticles}
			title="Search Results"
			articlesData={articlesData}
			asideData={featuredData}
			hasError={hasError}
		/>
	);
};

export default SearchNews;
