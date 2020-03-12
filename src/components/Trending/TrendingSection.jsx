import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TrendingItem from "./TrendingItem";
import { v4 as uuid } from "uuid";
import { H1 } from "../../styles/Headings";
import { fadeInItem } from "../../styles/animations";

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
	animation: 1s ${fadeInItem};
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

const TrendingSection = ({ data }) => {
	const { articles } = data;

	return (
		<Section>
			<Header>
				<H1>Trending</H1>
				<Link to="/viewmore/Trending">
					<Button>View More</Button>
				</Link>
			</Header>
			<Items>
				{articles.map(article => (
					<TrendingItem key={uuid()} article={article} />
				))}
			</Items>
		</Section>
	);
};

export default TrendingSection;
