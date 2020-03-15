import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import axios from "axios";
import ArticlesAsideContainer from "../components/ArticlesAsideContainer";

const DomainNews = () => {
	const [totalData, setTotalData] = useState(0);
	const [domainData, setDomainData] = useState([]);
	const [asideData, setAsideData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);
	const params = useParams();
	const { domain } = params;
	const pageSize = 100;
	console.log(params);

	async function getData() {
		setIsLoading(true);
		try {
			const [domainRes, asideRes] = await axios.all([
				axios.get(
					`https://newsapi.org/v2/everything?domains=${domain}&apiKey=${
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

			const { totalResults, articles } = domainRes.data;

			setTotalData(totalResults);
			setDomainData(articles);
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
	}, [domain]);

	if (hasError) return <Redirect to="/calls-finished" />;
	if (isLoading || asideData.length < 1 || domainData.length < 1)
		return <h1>Loading...</h1>;

	return (
		<ArticlesAsideContainer
			totalData={totalData}
			title={domain}
			articlesData={domainData}
			asideData={asideData}
		/>
	);
};

export default DomainNews;
