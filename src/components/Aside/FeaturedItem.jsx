import React from "react";
import styled from "styled-components";
import noImgPlaceholder from "../../images/no-img-available.jpg";
import P from "../../styles/P";
import A from "../../styles/A";
import { truncate } from "../../utility/helper";

const Item = styled.div`
	margin-bottom: 1.6rem;

	img {
		width: 100%;
		display: block;
		object-fit: cover;
		margin: 0 auto;
		height: 11rem;
		border-radius: 0.5rem;
	}
`;

const Title = styled(P)`
	margin-top: 0.4rem;
	padding-left: 0.3rem;
	padding-right: 0.5rem;
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
				<A
					to={{
						pathname: "/news-content",
						state: { article },
					}}
				>
					{truncate(article.title, 120)}
				</A>
			</Title>
		</Item>
	);
};

export default FeaturedItem;
