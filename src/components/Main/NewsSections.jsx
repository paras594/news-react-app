import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { v4 as uuid } from "uuid";
import NewsItem from "./NewsItem";

const Section = styled.section`
	margin-bottom: 2.4rem;

	h2 {
		font-size: 2rem;
	}
`;

const NewsContents = styled.section``;

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
							<NewsItem key={uuid()} article={article} />
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
