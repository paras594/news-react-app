import React from "react";
import styled from "styled-components";
import FeaturedItem from "./FeaturedItem";
import { v4 as uuid } from "uuid";
import SLink from "../../styles/SLink";
import Button from "../../styles/Button";
import { fadeInItem } from "../../styles/animations";
import { H3 } from "../../styles/Typography";
import {
	asideBgColor,
	buttonBgLightest,
	buttonTextDark,
} from "../../styles/Variables";

const Div = styled.div`
	border-radius: 1rem;
	align-self: flex-start;
	background: ${asideBgColor};
	width: 100%;
	padding: 1rem 1.6rem;

	@media (max-width: 1250px) {
		padding: 1rem 1.3rem;
	}
`;

const FeaturedNews = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	animation: 1s ${fadeInItem} ease;
`;

const Title = styled(H3)`
	margin-bottom: 1rem;
	margin-top: 0.3rem;
`;

const AsideFeaturedNews = ({ articles }) => {
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
					<Button bg={buttonBgLightest} color={buttonTextDark} shadow>
						View More
					</Button>
				</SLink>
			</FeaturedNews>
		</Div>
	);
};

export default AsideFeaturedNews;
