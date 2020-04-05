import React from "react";
import styled from "styled-components";
import { truncate, openLink } from "../utility/helper";
import noImgPlaceholder from "../images/no-img-available.jpg";
import { H5 } from "../styles/Typography";
import moment from "moment";
import Button from "../styles/Button";
import SLink from "../styles/SLink";
import A from "../styles/Anchor";
import { borderColorDark, timeTextDark } from "../styles/Variables";

const Item = styled.div`
	display: grid;
	grid-template-columns: 14rem 1fr;
	margin-top: 1rem;
	margin-bottom: 1rem;
	margin-left: 0.4rem;
	border: 1px solid ${borderColorDark};
	border-radius: 0.5rem;
	overflow: hidden;

	@media (max-width: 800px) {
		grid-template-columns: 12rem 1fr;
	}

	@media (max-width: 700px) {
		grid-template-columns: 10rem 1fr;
	}

	@media (max-width: 520px) {
		display: flex;
		flex-direction: column;
		margin-left: 0;
	}
`;

const ImgContainer = styled.div`
	overflow: hidden;
	height: calc(12rem / 1.5);
	border-right: 1px solid ${borderColorDark};
	cursor: pointer;

	@media (max-width: 700px) {
		height: 9rem;
	}

	@media (max-width: 520px) {
		height: 16rem;
		border-right: 0;
		border-bottom: 1px solid ${borderColorDark};
	}

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
		color: ${timeTextDark};
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
		<Item>
			<ImgContainer onClick={() => openLink(article.url)}>
				<img src={article.urlToImage} alt={article.author} />
			</ImgContainer>
			<Content>
				<Title>
					<A href={article.url} target="_blank">
						{truncate(article.title, 100)}
					</A>
				</Title>
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
