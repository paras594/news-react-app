import React from "react";
import styled from "styled-components";
import { truncate } from "../utility/helper";
import { H1, H4 } from "../styles/Typography";
import { fadeInItem } from "../styles/animations";
import moment from "moment";
import SLink from "../styles/SLink";
import Button from "../styles/Button";
import A from "../styles/Anchor";

const Header = styled.header`
	animation: 1s ${fadeInItem} ease;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 3fr 2fr;
	grid-template-rows: 12rem 12rem;
	grid-template-areas:
		"first second"
		"first third";
	gap: 0.8rem;

	@media (max-width: 1250px) {
		grid-template-rows: 11rem 11rem;
	}

	@media (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 14rem 20rem;
		grid-template-areas:
			"second third"
			"first first";
	}

	@media (max-width: 700px) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(3, 18rem);
		grid-template-areas:
			"first"
			"second"
			"third";
	}

	@media (max-width: 400px) {
		grid-template-rows: repeat(3, 13rem);
	}

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	.first {
		position: relative;
		grid-area: first;
	}

	.second {
		position: relative;
		grid-area: second;
	}

	.third {
		position: relative;
		grid-area: third;
	}
`;

const GridItem = styled.div`
	border-radius: 1rem;
	overflow: hidden;
	height: 100%;
	cursor: pointer;
`;

const Description = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 1rem;
	background: rgba(0, 0, 0, 0.4);
	background: linear-gradient(
		0deg,
		rgba(0, 0, 0, 0.7) 0%,
		rgba(0, 0, 0, 0.5) 40%,
		rgba(0, 0, 0, 0.3) 70%,
		rgba(0, 0, 0, 0) 100%
	);

	p {
		font-size: 0.8rem;
		font-weight: 500;
		color: rgba(255, 255, 255, 0.8);
	}
`;

const MainTitle = styled(H1)`
	margin-bottom: 0.4rem;

	@media (max-width: 700px) {
		font-size: 1.1rem;
		margin-bottom: 0.5rem;
	}
`;

const Title = styled(H4)`
	margin-bottom: 0.5rem;
`;

const Div = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

const HeaderGrid = ({ articles }) => {
	return (
		<Header>
			<Grid>
				<GridItem className="first">
					<img src={articles[0].urlToImage} alt={articles[0].author} />
					<Description>
						<MainTitle color="#fff">
							<A href={articles[0].url} target="_blank">
								{truncate(articles[0].title, 100)}
							</A>
						</MainTitle>
						<Div>
							<SLink
								mright="1rem"
								to={`/source/${articles[0].source.id}`}
							>
								<Button small>{articles[0].source.name}</Button>
							</SLink>
							<p>{moment(articles[0].publishedAt).fromNow()}</p>
						</Div>
					</Description>
				</GridItem>
				<GridItem className="second">
					<img src={articles[1].urlToImage} alt={articles[1].author} />
					<Description>
						<Title color="#fff">
							<A href={articles[1].url} target="_blank">
								{truncate(articles[1].title, 100)}
							</A>
						</Title>
						<Div>
							<SLink
								mright="1rem"
								to={`/source/${articles[1].source.id}`}
							>
								<Button small>{articles[1].source.name}</Button>
							</SLink>
							<p>{moment(articles[1].publishedAt).fromNow()}</p>
						</Div>
					</Description>
				</GridItem>
				<GridItem className="third">
					<img src={articles[2].urlToImage} alt={articles[2].author} />
					<Description pSize=".8rem">
						<Title color="#fff">
							<A href={articles[2].url} target="_blank">
								{truncate(articles[2].title, 100)}
							</A>
						</Title>
						<Div>
							<SLink
								mright="1rem"
								to={`/source/${articles[2].source.id}`}
							>
								<Button small>{articles[2].source.name}</Button>
							</SLink>
							<p>{moment(articles[2].publishedAt).fromNow()}</p>
						</Div>
					</Description>
				</GridItem>
			</Grid>
		</Header>
	);
};

export default HeaderGrid;
