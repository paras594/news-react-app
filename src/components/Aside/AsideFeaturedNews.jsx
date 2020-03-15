import React from "react";
import styled from "styled-components";
import FeaturedItem from "./FeaturedItem";
import { v4 as uuid } from "uuid";
import SLink from "../../styles/SLink";
import Button from "../../styles/Button";
import { clrLightGrey } from "../../styles/Variables";
import { fadeInItem } from "../../styles/animations";
import { H3 } from "../../styles/Typography";

const Div = styled.div`
	border-radius: 1rem;
	align-self: flex-start;
	background: ${clrLightGrey};
	width: 100%;
	padding: 1rem 1.6rem;
`;

const FeaturedNews = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	animation: 1s ${fadeInItem};
`;

const Title = styled(H3)`
	margin-bottom: 1rem;
	margin-top: 0.3rem;
`;

const AsideFeaturedNews = ({ data }) => {
	const { articles } = data;

	return (
		<Div>
			<Title>Featured News</Title>
			<FeaturedNews>
				<div>
					{articles.map(article => (
						<FeaturedItem key={uuid()} article={article} />
					))}
				</div>

				<SLink to="/category/Featured">
					<Button bg="#fff" shadow>
						View More
					</Button>
				</SLink>
			</FeaturedNews>
		</Div>
	);
};

export default AsideFeaturedNews;
