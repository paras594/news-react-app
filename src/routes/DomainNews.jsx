import React, { useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ArticlesAsideContainer from "../components/ArticlesAsideContainer";
import fetchArticlesData from "../redux/actions/fetchArticlesData";
import { capitalize } from "../utility/helper";
import Loader from "../components/Loader";

const DomainNews = () => {
	const params = useParams();
	const { domain } = params;
	const pageSize = 100;
	const url = `https://newsapi.org/v2/everything?domains=${domain}&apiKey=${
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
	}, [domain]);

	if (hasError) return <Redirect to="/calls-finished" />;
	if (isLoading || featuredData.length < 1 || articlesData.length < 1)
		return <Loader />;

	return (
		<ArticlesAsideContainer
			totalData={totalArticles}
			title={capitalize(domain)}
			articlesData={articlesData}
			asideData={featuredData}
			hasError={hasError}
		/>
	);
};

export default DomainNews;
