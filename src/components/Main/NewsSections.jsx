import React from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import NewsItem from "../NewsItem";
import { H1 } from "../../styles/Typography";
import SLink from "../../styles/SLink";
import Button from "../../styles/Button";

import { fadeInItem } from "../../styles/animations";

const Section = styled.section`
	margin-bottom: 2.4rem;
	margin-right: 1.5rem;

	a {
		text-decoration: none;
	}
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
				<SLink to={`/category/${category}`}>
					<Button>View More</Button>
				</SLink>
			</Container>
		</Section>
	);
};

export default NewsSections;
