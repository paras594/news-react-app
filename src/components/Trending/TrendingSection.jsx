import React from "react";
import styled from "styled-components";
import TrendingItem from "./TrendingItem";
import { v4 as uuid } from "uuid";
import { H1 } from "../../styles/Typography";
import { fadeInItem } from "../../styles/animations";
import SLink from "../../styles/SLink";
import Button from "../../styles/Button";

const Section = styled.section`
	margin-top: 4.2rem;
	margin-bottom: 3rem;

	@media (max-width: 1100px) {
		margin-top: 3rem;
		margin-bottom: 0;
	}
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	h2 {
		font-size: 2rem;
	}
`;

const Items = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 1rem;
	margin: 1rem 0;
	animation: 1s ${fadeInItem} ease;

	@media (max-width: 1150px) {
		grid-template-columns: repeat(2, 1fr);
		row-gap: 1rem;
	}

	@media (max-width: 550px) {
		grid-template-columns: 1fr;
	}
`;

const TrendingSection = ({ articles }) => {
	return (
		<Section>
			<Header>
				<H1>Trending</H1>
				<SLink to="/category/Trending">
					<Button>View More</Button>
				</SLink>
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
