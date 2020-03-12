import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { v4 as uuid } from "uuid";
import NewsItem from "../NewsItem";
import { H1 } from "../../styles/Headings";

import { fadeInItem } from "../../styles/animations";

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

const NewsSections = ({ category, data }) => {
	return (
		<Section id={category}>
			<H1>{category}</H1>
			<Container>
				<div>
					{data.map(article => (
						<NewsItem key={uuid()} article={article} />
					))}
				</div>
				<Link to={`viewmore/${category}`}>
					<Button>View More</Button>
				</Link>
			</Container>
		</Section>
	);
};

export default NewsSections;
