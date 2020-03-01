import React from "react";
import styled from "styled-components";
import { truncate } from "../../utility/helper";
import noImgPlaceholder from "../../images/no-img-available.jpg";
import A from "../../styles/A";
import { H4 } from "../../styles/Headings";

const Item = styled.div`
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 0.5rem;
	overflow: hidden;
`;

const Img = styled.img`
	width: 100%;
	height: 10rem;
	object-fit: cover;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Title = styled(H4)`
	padding: 0.5rem 0.8rem;
	margin-bottom: 0.4rem;
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
			<Title>
				<A
					to={{
						pathname: "/news-content",
						state: { article },
					}}
				>
					{truncate(article.title, 100)}
				</A>
			</Title>
		</Item>
	);
};

export default TrendingItem;
