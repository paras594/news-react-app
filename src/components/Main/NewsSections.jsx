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
import Loader from "../Loader";
import { fadeInItem, fadeOutItem } from "../../styles/animations";

const Section = styled.section`
	margin-bottom: 2.4rem;
	margin-right: 1.5rem;

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

const Container = styled.div`
	display: flex;
	flex-direction: column;
	animation: 1s ${fadeInItem};

	a {
		align-self: flex-end;
	}
`;

const LoaderContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: calc(12rem * 2.5);
	width: 100%;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 1rem;
	animation: 1s ${fadeOutItem};
`;

const NewsSections = ({ category, categoryUrl }) => {
	const [sectionData, setSectionData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(categoryUrl, {
				params: {
					pageSize: 4,
				},
			})
			.then(res => {
				const { articles } = res.data;
				setSectionData(articles);
				setIsLoading(false);
			})
			.catch(err => {
				console.log(err.response.data);
				setIsLoading(false);
			});
	}, []);

	return (
		<Section id={category}>
			<H1>{category}</H1>
			{isLoading ? (
				<LoaderContainer>
					<Loader />
				</LoaderContainer>
			) : (
				<Container>
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
				</Container>
			)}
		</Section>
	);
};

export default NewsSections;
