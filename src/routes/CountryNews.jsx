import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import axios from "axios";
import countryCodeMap from "../utility/countryCodeMap";
import ArticlesAsideContainer from "../components/ArticlesAsideContainer";

const CountryNews = () => {
	const [totalData, setTotalData] = useState(0);
	const [countryData, setCountryData] = useState([]);
	const [asideData, setAsideData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);
	const params = useParams();
	const { countryCode } = params;
	const pageSize = 100;
	console.log(params);

	async function getData() {
		setIsLoading(true);
		try {
			const [countryRes, asideRes] = await axios.all([
				axios.get(
					`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${
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

			const { totalResults, articles } = countryRes.data;

			setTotalData(totalResults);
			setCountryData(articles);
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
	}, [countryCode]);

	if (hasError) return <Redirect to="/calls-finished" />;
	if (isLoading || asideData.length < 1 || countryData.length < 1)
		return <h1>Loading...</h1>;

	return (
		<ArticlesAsideContainer
			totalData={totalData}
			title={`${countryCodeMap[countryCode]} Top Headlines`}
			articlesData={countryData}
			asideData={asideData}
		/>
	);
};

export default CountryNews;
