import React from "react";
import styled from "styled-components";
import noImgPlaceholder from "../../images/no-img-available.jpg";

const Item = styled.div`
	margin-bottom: 1.6rem;
	/*border: 1px solid rgba(0, 0, 0, 0.1);*/

	img {
		width: 100%;
		display: block;
		margin: 0 auto;
		height: 11rem;
		border-radius: 0.5rem;
	}
	p {
		font-weight: 700;
		margin-top: 0.4rem;
		padding-left: 0.3rem;
		padding-right: 0.5rem;
		font-size: 0.9rem;
		line-height: 1.5;
		color: rgba(0, 0, 0, 0.9);
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
			<p>{article.title}</p>
		</Item>
	);
};

export default FeaturedItem;
