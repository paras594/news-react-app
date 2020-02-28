import React from "react";
import styled from "styled-components";
import { truncate, formatDate } from "../../utility/helper";
import noImgPlaceholder from "../../images/no-img-available.jpg";

const Item = styled.div`
	display: grid;
	grid-template-columns: 14rem 1fr;
	margin-top: 1rem;
	margin-bottom: 1.5rem;
	margin-left: 0.4rem;
	margin-right: 1.8rem;
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
	h3 {
		font-size: 1.1rem;
		margin-bottom: 1rem;
	}

	p {
		font-size: 0.8rem;
		font-weight: 500;
		color: rgba(0, 0, 0, 0.8);
	}
`;

const NewsItem = ({ article }) => {
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
		<Item>
			<ImgContainer>
				<img src={article.urlToImage} alt={article.author} />
			</ImgContainer>
			<Content>
				<h3>{truncate(article.title, 100)}</h3>
				<p>Published At: {formatDate(article.publishedAt)}</p>
			</Content>
		</Item>
	);
};

export default NewsItem;
