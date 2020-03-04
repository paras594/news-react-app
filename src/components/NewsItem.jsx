import React from "react";
import styled from "styled-components";
import { truncate, formatDate } from "../utility/helper";
import noImgPlaceholder from "../images/no-img-available.jpg";
import A from "../styles/A";
import { H4 } from "../styles/Headings";
import P from "../styles/P";

const Item = styled.div`
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
`;

const Title = styled(H4)`
	margin-bottom: 1rem;
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
				<P size=".8rem" weight="500" color="rgba(0, 0, 0, .8)">
					Published At: {formatDate(article.publishedAt)}
				</P>
			</Content>
		</Item>
	);
};

export default NewsItem;
