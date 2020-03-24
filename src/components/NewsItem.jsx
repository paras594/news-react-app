import React from "react";
import styled from "styled-components";
import { truncate } from "../utility/helper";
import noImgPlaceholder from "../images/no-img-available.jpg";
import { H5 } from "../styles/Typography";
import moment from "moment";
import A from "../styles/Anchor";
import Button from "../styles/Button";
import SLink from "../styles/SLink";

const Item = styled(A)`
	display: grid;
	grid-template-columns: 14rem 1fr;
	margin-top: 1rem;
	margin-bottom: 1rem;
	margin-left: 0.4rem;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 0.5rem;
	overflow: hidden;
`;

const ImgContainer = styled.div`
	overflow: hidden;
	height: calc(12rem / 1.5);
	border-right: 1px solid rgba(0, 0, 0, 0.2);

	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const Content = styled.div`
	padding-top: 0.7rem;
	padding-bottom: 0.7rem;
	padding-left: 0.7rem;
	padding-right: 0.8rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Title = styled(H5)`
	margin-bottom: 1rem;
`;

const Div = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	p {
		font-size: 0.8rem;
		font-weight: 500;
		color: rgba(0, 0, 0, 0.8);
	}
`;

const NewsItem = ({ article }) => {
	let route = "";

	if (!article.source.id) {
		route = `/domain/${article.source.name.toLowerCase()}`;
	} else {
		route = `/source/${article.source.id}`;
	}

	if (!article.author) {
		article.author = "News article";
	}

	if (!article.description) {
		article.description = "No description available for this.";
	}

	if (!article.urlToImage) {
		article.urlToImage = noImgPlaceholder;
	}

	return (
		<Item href={article.url} target="_blank">
			<ImgContainer>
				<img src={article.urlToImage} alt={article.author} />
			</ImgContainer>
			<Content>
				<Title>{truncate(article.title, 100)}</Title>
				<Div>
					<SLink to={route}>
						<Button small>{article.source.name}</Button>
					</SLink>
					<p>{moment(article.publishedAt).fromNow()}</p>
				</Div>
			</Content>
		</Item>
	);
};

export default NewsItem;
