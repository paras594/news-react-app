import React from "react";
import styled from "styled-components";
import { truncate } from "../../utility/helper";
import noImgPlaceholder from "../../images/no-img-available.jpg";

const Item = styled.div`
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 0.5rem;
	overflow: hidden;

	img {
		width: 100%;
		height: 10rem;
		object-fit: cover;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}

	h2 {
		font-size: 1rem;
		padding: 0.5rem 0.8rem;
		margin-bottom: 0.4rem;
		line-height: 1.4;
		color: rgba(0, 0, 0, 1);
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
			<img src={article.urlToImage} alt={article.author} />
			<h2>{truncate(article.title, 100)}</h2>
		</Item>
	);
};

export default TrendingItem;
