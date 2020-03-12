import React from "react";
import styled from "styled-components";
import { truncate } from "../../utility/helper";
import noImgPlaceholder from "../../images/no-img-available.jpg";
import { H4 } from "../../styles/Headings";
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
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 0.5rem;
	overflow: hidden;
	display: flex;
	flex-direction: column;
`;

const Img = styled.img`
	width: 100%;
	height: 10rem;
	object-fit: cover;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Description = styled.div`
	padding: 0.5rem 0.8rem;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	flex: 1;
`;

const Title = styled(H4)`
	margin-bottom: 0.8rem;
`;

const Button = styled.button`
	border: none;
	background: #eee;
	border-radius: 1rem;
	padding: ${props => (props.small ? "0.4rem .8rem" : "0.5rem 1rem")};
	font-size: 0.75rem;
	font-weight: 500;
	cursor: pointer;
	align-self: flex-start;
	margin-right: 0.8rem;
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

const TrendingItem = ({ article }) => {
	if (!article.author) {
		article.author = "Trending news";
	}

	if (!article.urlToImage) {
		article.urlToImage = noImgPlaceholder;
	}

	return (
		<Item>
			<Img src={article.urlToImage} alt={article.author} />
			<Description>
				<Title>
					<A href={article.url} target="_blank">
						{truncate(article.title, 100)}
					</A>
				</Title>
				<Div>
					<Button small>{article.source.name}</Button>
					<p>{moment(article.publishedAt).fromNow()}</p>
				</Div>
			</Description>
		</Item>
	);
};

export default TrendingItem;
