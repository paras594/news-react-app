import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FeaturedItem from "./FeaturedItem";
import { v4 as uuid } from "uuid";

import { fadeInItem } from "../../styles/animations";

const Div = styled.div`
	border-radius: 1rem;
	align-self: flex-start;
	background: #efefef;
	width: 100%;
	padding: 1rem 1.6rem;
`;

const H3 = styled.h3`
	margin-top: 0.5rem;
	margin-bottom: 0.8rem;
	font-size: 1.4rem;
`;

const Button = styled.button`
	border: none;
	background: #fff;
	border-radius: 1rem;
	padding: 0.5rem 1.2rem;
	display: block;
	font-size: 0.8rem;
	font-weight: 400;
	margin: 0 auto;
	cursor: pointer;
`;

const FeaturedNews = styled.div`
	animation: 1s ${fadeInItem};
`;

const A = styled(Link)`
	text-decoration: none;
	color: inherit;
	display: block;

	&:hover {
		text-decoration: underline;
	}
`;

const AsideFeaturedNews = ({ data }) => {
	const { articles } = data;

	return (
		<Div>
			<H3>Featured News</H3>
			<FeaturedNews>
				<div>
					{articles.map(article => (
						<FeaturedItem key={uuid()} article={article} />
					))}
				</div>

				<A to="/viewmore/Featured">
					<Button>View More</Button>
				</A>
			</FeaturedNews>
		</Div>
	);
};

export default AsideFeaturedNews;
