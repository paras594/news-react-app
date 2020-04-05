import React from "react";
import styled from "styled-components";
import { truncate, openLink } from "../../utility/helper";
import noImgPlaceholder from "../../images/no-img-available.jpg";
import { H5 } from "../../styles/Typography";
import moment from "moment";
import SLink from "../../styles/SLink";
import Button from "../../styles/Button";
import A from "../../styles/Anchor";
import { borderColorDark, timeTextDark } from "../../styles/Variables";

const Item = styled.div`
	border: 1px solid ${borderColorDark};
	border-radius: 0.5rem;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	height: 100%;
	cursor: pointer;
`;

const Img = styled.img`
	width: 100%;
	height: 10rem;
	object-fit: cover;
	border-bottom: 1px solid ${borderColorDark};

	@media (max-width: 1150px) {
		height: 16rem;
	}
`;

const Description = styled.div`
	padding: 0.5rem 0.8rem;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	flex: 1;
`;

const Title = styled(H5)`
	margin-bottom: 0.8rem;

	@media (max-width: 1150px) {
		margin-bottom: 1rem;
	}
`;

const Div = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 0.4rem;

	p {
		font-size: 0.8rem;
		font-weight: 500;
		color: ${timeTextDark};
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
			<Img
				onClick={() => openLink(article.url)}
				src={article.urlToImage}
				alt={article.author}
			/>
			<Description>
				<Title>
					<A href={article.url} target="_blank">
						{truncate(article.title, 100)}
					</A>
				</Title>
				<Div>
					<SLink to={`/source/${article.source.id}`}>
						<Button small>{article.source.name}</Button>
					</SLink>
					<p>{moment(article.publishedAt).fromNow()}</p>
				</Div>
			</Description>
		</Item>
	);
};

export default TrendingItem;
