/* 
	TODO: add view more button
*/
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FeaturedItem from "./FeaturedItem";
import { v4 as uuid } from "uuid";
import axios from "axios";
import A from "../../styles/A";

const Div = styled.div`
	border-radius: 1rem;
	align-self: flex-start;
	background: #efefef;
	width: 100%;
	padding: 1rem 1.6rem;
`;

const H3 = styled.h3`
	margin-top: 0.5rem;
	margin-bottom: 0.8rem;
	font-size: 1.4rem;
`;

const Button = styled.button`
	border: none;
	background: #fff;
	border-radius: 1rem;
	padding: 0.5rem 1.2rem;
	display: block;
	font-size: 0.8rem;
	font-weight: 400;
	margin: 0 auto;
	cursor: pointer;
`;

const AsideFeaturedNews = () => {
	const [featuredNews, setFeaturedNews] = useState([]);
	const url = `https://newsapi.org/v2/everything?sources=entertainment-weekly&pageSize=3&apiKey=${
		process.env.API_KEY
	}`;
	const category = "Featured News";

	const fullDataUrl = `https://newsapi.org/v2/everything?sources=entertainment-weekly&apiKey=${
		process.env.API_KEY
	}`;

	useEffect(() => {
		axios.get(url).then(res => {
			const { articles } = res.data;
			setFeaturedNews(articles);
		});
	}, []);
	return (
		<Div>
			<H3>Featured News</H3>
			{featuredNews.length > 0 ? (
				<>
					<div>
						{featuredNews.map(article => (
							<FeaturedItem key={uuid()} article={article} />
						))}
					</div>

					<A
						to={{
							pathname: "/viewmore",
							state: { url: fullDataUrl, category },
						}}
					>
						<Button>View More</Button>
					</A>
				</>
			) : (
				<h3>Loading...</h3>
			)}
		</Div>
	);
};

export default AsideFeaturedNews;
