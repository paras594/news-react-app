import React, { useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ArticlesAsideContainer from "../components/ArticlesAsideContainer";
import fetchArticlesData from "../redux/actions/fetchArticlesData";
import allCategoriesMap from "../utility/allCategoriesMap";
import { capitalize } from "../utility/helper";
import Loader from "../components/Loader";

const CategoryNews = () => {
	const params = useParams();
	const { category } = params;
	const pageSize = 100;
	const urls = allCategoriesMap;
	const url = urls[capitalize(category)];
	const newState = useSelector(state => state.news);
	const {
		isLoading,
		hasError,
		featuredData,
		articlesData,
		totalArticles,
	} = newState;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchArticlesData(url, pageSize));
	}, [category]);

	if (hasError) return <Redirect to="/calls-finished" />;
	if (isLoading) return <Loader />;

	return (
		<ArticlesAsideContainer
			totalData={totalArticles}
			title={category}
			articlesData={articlesData}
			asideData={featuredData}
			hasError={hasError}
		/>
	);
};

export default CategoryNews;
