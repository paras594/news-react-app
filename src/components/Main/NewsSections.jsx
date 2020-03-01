/* 
	TODO: add view more button
*/
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { v4 as uuid } from "uuid";
import NewsItem from "../NewsItem";
import { H1 } from "../../styles/Headings";

const Section = styled.section`
	margin-bottom: 2.4rem;

	a {
		text-decoration: none;
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
		axios
			.get(categoryUrl, {
				params: {
					pageSize: 4,
				},
			})
			.then(res => {
				const { articles } = res.data;
				setSectionData(articles);
			});
	}, []);

	return (
		<Section>
			<H1>{category}</H1>
			{sectionData.length > 0 ? (
				<>
					<div>
						{sectionData.map(article => (
							<NewsItem key={uuid()} article={article} />
						))}
					</div>
					<Link
						to={{
							pathname: "/viewmore",
							state: { url: categoryUrl, category },
						}}
					>
						<Button>View More</Button>
					</Link>
				</>
			) : (
				<h3>Loading...</h3>
			)}
		</Section>
	);
};

export default NewsSections;
