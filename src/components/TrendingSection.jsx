import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { truncate } from "../utility/helper";

const Section = styled.section`
	margin: 3rem 0;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Items = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 1rem;
	/* border: 1px solid black; */
	margin: 1rem 0;
`;

const Item = styled.div`
	/* border: 1px solid red; */
	img {
		border-radius: 0.6rem;
		width: 100%;
		height: 10rem;
		object-fit: cover;
	}

	h2 {
		font-size: 1rem;
		padding: 0.1rem 0.3rem;
		line-height: 1.3;
		color: rgba(0, 0, 0, 1);
		margin-bottom: 0.2rem;
	}
	p {
		font-size: 0.8rem;
		padding: 0 0.3rem;
		line-height: 1.4;
		color: rgba(0, 0, 0, 0.9);
		font-weight: 500;
	}
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

	useEffect(() => {
		const url = `http://newsapi.org/v2/top-headlines?sources=google-news&pageSize=4&apiKey=${
			process.env.API_KEY
		}`;
		axios.get(url).then(res => {
			let { articles } = res.data;
			setTrendingData(articles);
		});
	}, []);

	return trendingData.length > 0 ? (
		<Section>
			<Header>
				<h2>Trending</h2>
				<Button>View More</Button>
			</Header>

			<Items>
				{trendingData.map(article => (
					<Item key={article.url}>
						<img src={article.urlToImage} alt={article.author} />
						<h2>{article.title}</h2>
						<p>{truncate(article.description, 180)}</p>
					</Item>
				))}
			</Items>
		</Section>
	) : (
		<h1>loading...</h1>
	);
};

export default TrendingSection;
