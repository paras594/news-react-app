import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import axios from "axios";
import ArticlesAsideContainer from "../components/ArticlesAsideContainer";

const SourceNews = () => {
	const [totalData, setTotalData] = useState(0);
	const [sourceData, setSourceData] = useState([]);
	const [asideData, setAsideData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);
	const params = useParams();
	const { source } = params;
	const pageSize = 100;
	console.log(params); // source name: bbc-news

	async function getData() {
		setIsLoading(true);
		try {
			const [sourceRes, asideRes] = await axios.all([
				axios.get(
					`https://newsapi.org/v2/everything?sources=${source}&apiKey=${
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

			const { totalResults, articles } = sourceRes.data;

			setTotalData(totalResults);
			setSourceData(articles);
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
	}, [source]);

	if (hasError) return <Redirect to="/calls-finished" />;
	if (isLoading || asideData.length < 1 || sourceData.length < 1)
		return <h1>Loading...</h1>;

	return (
		<ArticlesAsideContainer
			totalData={totalData}
			title={source}
			articlesData={sourceData}
			asideData={asideData}
		/>
	);
};

export default SourceNews;
