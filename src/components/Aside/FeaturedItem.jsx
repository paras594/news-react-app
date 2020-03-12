import React from "react";
import styled from "styled-components";
import noImgPlaceholder from "../../images/no-img-available.jpg";
import P from "../../styles/P";
import { truncate } from "../../utility/helper";
import moment from "moment";

const A = styled.a`
	display: block;
	color: inherit;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

const Item = styled.div`
	margin-bottom: 1.4rem;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 0.5rem;
	overflow: hidden;
	img {
		width: 100%;
		display: block;
		object-fit: cover;
		margin: 0 auto;
		height: 11rem;
	}
`;

const Title = styled(P)`
	margin-top: 0.4rem;
	padding-left: 0.6rem;
	padding-right: 0.5rem;
	margin-bottom: 1rem;
`;

const Button = styled.button`
	border: none;
	background: #aaa;
	border-radius: 1rem;
	padding: ${props => (props.small ? "0.4rem .8rem" : "0.5rem 1rem")};
	font-size: 0.75rem;
	font-weight: 500;
	cursor: pointer;
	align-self: flex-start;
	margin-right: 0.8rem;
	margin-left: 0.6rem;
	margin-bottom: 0.5rem;
`;

const Div = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-bottom: 0.4rem;

	p {
		font-size: 0.8rem;
		font-weight: 500;
		color: rgba(0, 0, 0, 0.8);
	}
`;

const FeaturedItem = ({ article }) => {
	if (!article.author) {
		article.author = "Featured News";
	}

	if (!article.urlToImage) {
		article.urlToImage = noImgPlaceholder;
	}

	return (
		<Item>
			<img src={article.urlToImage} alt={article.author} />
			<Title size="0.9rem" weight="700" color="rgba(0, 0, 0, 0.9)">
				<A href={article.url} target="_blank">
					{truncate(article.title, 120)}
				</A>
			</Title>
			<Div>
				<Button small>{article.source.name}</Button>
				<p>{moment(article.publishedAt).fromNow()}</p>
			</Div>
		</Item>
	);
};

export default FeaturedItem;
