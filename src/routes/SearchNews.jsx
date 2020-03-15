import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import axios from "axios";
import ArticlesAsideContainer from "../components/ArticlesAsideContainer";

const SearchNews = () => {
	const [totalData, setTotalData] = useState(0);
	const [searchData, setSearchData] = useState([]);
	const [asideData, setAsideData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);
	const params = useParams();
	const { query } = params;
	const pageSize = 100;

	async function getData() {
		setIsLoading(true);
		try {
			const [searchRes, asideRes] = await axios.all([
				axios.get(
					`https://newsapi.org/v2/everything?qInTitle=${query}&apiKey=${
						process.env.API_KEY
					}`,
					{ params: { pageSize } }
				),
				axios.get(
					`https://newsapi.org/v2/everything?sources=entertainment-weekly&apiKey=${
						process.env.API_KEY
					}`,
					{ params: { pageSize: 3 } }
				),
			]);

			const { totalResults, articles } = searchRes.data;

			setTotalData(totalResults);
			setSearchData(articles);
			setAsideData(asideRes.data);
			setIsLoading(false);
		} catch (err) {
			console.log(err);
			setIsLoading(false);
			setHasError(true);
		}
	}

	useEffect(() => {
		getData();
	}, [query]);

	if (hasError) return <Redirect to="/calls-finished" />;
	if (isLoading || asideData.length < 1 || searchData.length < 1)
		return <h1>Loading...</h1>;

	return (
		<ArticlesAsideContainer
			totalData={totalData}
			title="Search Results"
			articlesData={searchData}
			asideData={asideData}
		/>
	);
};

export default SearchNews;
