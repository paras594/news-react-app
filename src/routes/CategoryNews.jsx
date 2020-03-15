import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import axios from "axios";
import allCategoriesMap from "../utility/allCategoriesMap";
import { capitalize } from "../utility/helper";
import ArticlesAsideContainer from "../components/ArticlesAsideContainer";

const CategoryNews = () => {
	console.log("running");
	const urls = allCategoriesMap;

	const [totalData, setTotalData] = useState(0);
	const [categoryData, setCategoryData] = useState([]);
	const [asideData, setAsideData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);
	const params = useParams();
	const { category, page } = params;
	const pageSize = 100;

	async function getData() {
		setIsLoading(true);
		try {
			const [categoryRes, asideRes] = await axios.all([
				axios.get(urls[capitalize(category)], { params: { pageSize } }),
				axios.get(urls["Featured"], { params: { pageSize: 3 } }),
			]);

			const { totalResults, articles } = categoryRes.data;
			setTotalData(totalResults);
			setCategoryData(articles);
			setAsideData(asideRes.data);
			setIsLoading(false);
		} catch (err) {
			setIsLoading(false);
			setHasError(true);
		}
	}

	useEffect(() => {
		getData();
	}, [category]);

	if (hasError) return <Redirect to="/calls-finished" />;
	if (isLoading || asideData.length < 1 || categoryData.length < 1)
		return <h1>Loading...</h1>;

	return (
		<ArticlesAsideContainer
			totalData={totalData}
			title={category}
			articlesData={categoryData}
			asideData={asideData}
		/>
	);
};

export default CategoryNews;
