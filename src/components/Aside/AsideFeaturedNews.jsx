/* 
	TODO: add view more button
*/
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FeaturedItem from "./FeaturedItem";
import { v4 as uuid } from "uuid";
import axios from "axios";
import A from "../../styles/A";
import Loader from "../Loader";
import { fadeInItem, fadeOutItem } from "../../styles/animations";

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

const FeaturedNews = styled.div`
	animation: 1s ${fadeInItem};
`;

const LoaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 30rem;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 1rem;
	animation: 1s ${fadeOutItem};
`;

const AsideFeaturedNews = () => {
	const [featuredNews, setFeaturedNews] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const url = `https://newsapi.org/v2/everything?sources=entertainment-weekly&pageSize=3&apiKey=${
		process.env.API_KEY
	}`;
	const category = "Featured News";

	const fullDataUrl = `https://newsapi.org/v2/everything?sources=entertainment-weekly&apiKey=${
		process.env.API_KEY
	}`;

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(url)
			.then(res => {
				const { articles } = res.data;
				setFeaturedNews(articles);
				setIsLoading(false);
			})
			.catch(err => {
				console.log(err.response.data);
				setIsLoading(false);
			});
	}, []);
	return (
		<Div>
			<H3>Featured News</H3>
			{isLoading ? (
				<LoaderContainer>
					<Loader />
				</LoaderContainer>
			) : (
				<FeaturedNews>
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
				</FeaturedNews>
			)}
		</Div>
	);
};

export default AsideFeaturedNews;
