import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { truncate } from "../utility/helper";

const AsideContainer = styled.div`
	margin-left: 2rem;
	/*border: 1px solid red;*/
	width: 20rem;
`;

const Div = styled.div`
	border-radius: 1rem;
	align-self: flex-start;
	/*border: 1px solid red;*/
	background: #efefef;
	width: 100%;
	padding: 1rem 1.6rem;
`;

const FeaturedItems = styled.div`
	/*border: 1px solid blue;*/
`;

const Item = styled.div`
	margin-bottom: 1.6rem;
	/*border: 1px solid rgba(0, 0, 0, 0.1);*/

	img {
		width: 100%;
		display: block;
		margin: 0 auto;
		height: 11rem;
		border-radius: 0.5rem;
	}
	p {
		font-weight: 700;
		margin-top: 0.4rem;
		padding-left: 0.3rem;
		padding-right: 0.5rem;
		font-size: 0.9rem;
		line-height: 1.5;
		color: rgba(0, 0, 0, 0.9);
	}
`;

const H3 = styled.h3`
	margin-top: 0.5rem;
	margin-bottom: 0.8rem;
	/*padding: 0 1rem;*/
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

const Form = styled.form`
	background: #efefef;
	width: 100%;
	padding: 1rem 1.6rem;
	border-radius: 1rem;
	margin-bottom: 1rem;

	div {
		display: flex;
		margin-bottom: 1rem;
		align-items: center;
		padding: 0 0.4rem;
		label {
			font-weight: 500;
			font-size: 0.9rem;
			width: 8rem;
		}

		select {
			all: unset;
			background: #fff;
			color: rgba(0, 0, 0, 0.9);
			width: 6rem;
			padding: 0.3rem 0.8rem;
			font-size: 0.9rem;
			font-weight: 500;
			border-radius: 2rem;
			position: relative;
			&::after {
				content: "";
				border: 4px solid red;
				position: absolute;
				right: 0;
				top: 0;
			}
		}
	}

	button {
		margin: 0 auto;
		display: block;
		border-radius: 2rem;
		background: #fff;
		border: none;
		padding: 0.5rem 1.5rem;
		margin-top: 1.4rem;
		font-size: 0.9rem;
	}
`;

const Aside = () => {
	const [featuredNews, setFeaturedNews] = useState([]);

	useEffect(() => {
		const url = `http://newsapi.org/v2/everything?sources=entertainment-weekly&pageSize=3&apiKey=${
			process.env.API_KEY
		}`;

		axios.get(url).then(res => {
			const { articles } = res.data;
			setFeaturedNews(articles);
		});
	}, []);

	return (
		<AsideContainer>
			<Form>
				<H3>Search News</H3>
				<div>
					<label htmlFor="country">Choose Country : </label>
					<select name="country" id="country">
						<option value="all">All</option>
						<option value="india">India</option>
						<option value="usa">USA</option>
						<option value="argentina">Argentina</option>
						<option value="china">China</option>
						<option value="indonesia">Indonesia</option>
						<option value="japan">Japan</option>
					</select>
				</div>
				<div>
					<label htmlFor="country">Choose Source : </label>
					<select name="source" id="source">
						<option value="all">All</option>
						<option value="abp-news">ABP News</option>
						<option value="bbc-news">BBC News</option>
						<option value="ndtv">NDTV</option>
						<option value="new18">News18</option>
						<option value="fox-news">Fox News</option>
						<option value="cnn-news">CNN News</option>
					</select>
				</div>
				<button>Search</button>
			</Form>
			<Div>
				<H3>Featured News</H3>
				{featuredNews.length > 0 ? (
					<>
						{" "}
						<FeaturedItems>
							{featuredNews.map(article => (
								<Item key={article.url}>
									<img src={article.urlToImage} alt={article.author} />
									<p>{article.title}</p>
								</Item>
							))}
						</FeaturedItems>
						<Button>View More</Button>
					</>
				) : (
					<h3>Loading...</h3>
				)}
			</Div>
		</AsideContainer>
	);
};

export default Aside;
