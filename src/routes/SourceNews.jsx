import React, { useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ArticlesAsideContainer from "../components/ArticlesAsideContainer";
import fetchArticlesData from "../redux/actions/fetchArticlesData";
import Loader from "../components/Loader";

const SourceNews = () => {
	const params = useParams();
	const { source } = params;
	const pageSize = 100;
	const url = `https://newsapi.org/v2/everything?sources=${source}&apiKey=${
		process.env.API_KEY
	}`;
	const newsState = useSelector(state => state.news);
	const {
		isLoading,
		hasError,
		articlesData,
		featuredData,
		totalArticles,
	} = newsState;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchArticlesData(url, pageSize));
	}, [source]);

	if (hasError) return <Redirect to="/calls-finished" />;
	if (isLoading) return <Loader />;

	return (
		<ArticlesAsideContainer
			totalData={totalArticles}
			title={source}
			articlesData={articlesData}
			asideData={featuredData}
			hasError={hasError}
		/>
	);
};

export default SourceNews;
