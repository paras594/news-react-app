import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import TrendingItem from "./TrendingItem";
import { v4 as uuid } from "uuid";

const Section = styled.section`
	margin-top: 4.2rem;
	margin-bottom: 3rem;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;

	h2 {
		font-size: 2rem;
	}
`;

const Items = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 1rem;
	/* border: 1px solid black; */
	margin: 1rem 0;
`;

const Button = styled.button`
	border: none;
	background: #eee;
	border-radius: 1rem;
	padding: 0.5rem 1.2rem;
	font-size: 0.8rem;
	font-weight: 400;
	margin-left: 0.5rem;
	cursor: pointer;
`;

const TrendingSection = () => {
	const [trendingData, setTrendingData] = useState([]);
	const url = `https://newsapi.org/v2/top-headlines?sources=cnn&pageSize=4&apiKey=${
		process.env.API_KEY
	}`;
	const fullDataUrl = `https://newsapi.org/v2/everything?sources=cnn&language=en&apiKey=${
		process.env.API_KEY
	}`;

	const category = "Trending";

	useEffect(() => {
		axios.get(url).then(res => {
			let { articles } = res.data;
			setTrendingData(articles);
		});
	}, []);

	return trendingData.length > 0 ? (
		<Section>
			<Header>
				<h2>Trending</h2>
				<Link
					to={{
						pathname: "/viewmore",
						state: { url: fullDataUrl, category },
					}}
				>
					<Button>View More</Button>
				</Link>
			</Header>

			<Items>
				{trendingData.map(article => (
					<TrendingItem key={uuid()} article={article} />
				))}
			</Items>
		</Section>
	) : (
		<h1>Loading...</h1>
	);
};

export default TrendingSection;
