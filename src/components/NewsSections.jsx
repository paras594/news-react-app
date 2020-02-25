import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { truncate } from "../utility/helper";

const Section = styled.section`
	margin-bottom: 2.4rem;
`;

const NewsContents = styled.section``;

const NewsItem = styled.div`
	display: grid;
	grid-template-columns: 14rem 1fr;
	column-gap: 1rem;
	margin-top: 1rem;
	margin-bottom: 1.5rem;
	margin-left: 0.4rem;
	margin-right: 1.8rem;
`;

const ImgContainer = styled.div`
	border-radius: 0.5rem;
	overflow: hidden;
	min-height: calc(12rem / 1.8);
	max-height: 9rem;
	border: 1px solid rgba(0, 0, 0, 0.3);
	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const Content = styled.div`
	h3 {
		margin-bottom: 0.3rem;
	}

	p {
		line-height: 1.5;
		padding: 0.3rem 0;
		font-size: 0.9rem;
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

const NewsSections = ({ category, categoryUrl }) => {
	const [sectionData, setSectionData] = useState([]);

	useEffect(() => {
		axios.get(categoryUrl).then(res => {
			const { articles } = res.data;
			setSectionData(articles);
		});
	}, []);

	return (
		<Section>
			<h2>{category}</h2>
			{sectionData.length > 0 ? (
				<>
					<NewsContents>
						{sectionData.map(article => (
							<NewsItem key={article.url}>
								<ImgContainer>
									<img src={article.urlToImage} alt={article.author} />
								</ImgContainer>
								<Content>
									<h3>{article.title}</h3>
									<p>
										{truncate(article.description, 120)}
										{article.description &&
										article.description.length > 120 ? (
											<a href="#">more</a>
										) : (
											""
										)}
									</p>
								</Content>
							</NewsItem>
						))}
					</NewsContents>
					<Button>View More</Button>
				</>
			) : (
				<h3>Loading...</h3>
			)}
		</Section>
	);
};

export default NewsSections;
