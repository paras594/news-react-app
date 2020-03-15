import React from "react";
import styled from "styled-components";
import noImgPlaceholder from "../../images/no-img-available.jpg";
import { truncate } from "../../utility/helper";
import moment from "moment";
import A from "../../styles/Anchor";
import { P } from "../../styles/Typography";

const ImgContainer = styled.div`
	height: 11rem;
	position: relative;
	width: 100%;
	z-index: 1;
	img {
		width: 100%;
		height: 100%;
		display: block;
		object-fit: cover;
		margin: 0 auto;
	}

	p {
		position: absolute;
		z-index: 99;
		color: rgba(255, 255, 255, 0.9);
		background: rgba(0, 0, 0, 0.5);
		padding: 0.25rem 0.5rem;
		bottom: 0.4rem;
		right: 0.4rem;
		font-size: 0.8rem;
		border-radius: 1rem;
	}
`;

const Item = styled.div`
	margin-bottom: 1.8rem;
	background: #fff;
	border-radius: 0.5rem;
	overflow: hidden;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled(P)`
	padding-top: 1rem;
	padding-right: 0.8rem;
	padding-bottom: 1rem;
	padding-left: 0.8rem;
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
			<ImgContainer>
				<img src={article.urlToImage} alt={article.author} />
				<p>{moment(article.publishedAt).fromNow()}</p>
			</ImgContainer>
			<Title size="0.9rem" weight="700" color="rgba(0, 0, 0, 0.9)">
				<A href={article.url} target="_blank">
					{truncate(article.title, 120)}
				</A>
			</Title>
		</Item>
	);
};

export default FeaturedItem;
