import React from "react";
import styled from "styled-components";
import { truncate } from "../utility/helper";
import { H1, H3 } from "../styles/Headings";
import { fadeInItem } from "../styles/animations";
import moment from "moment";

const Header = styled.header`
	animation: 1s ${fadeInItem};
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 3fr 2fr;
	grid-template-rows: 12rem 12rem;
	grid-template-areas:
		"first second"
		"first third";
	gap: 0.8rem;

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
`;

const Title = styled(H3)`
	margin-bottom: 0.5rem;
`;

const Button = styled.button`
	border: none;
	background: #eee;
	border-radius: 1rem;
	padding: ${props => (props.small ? "0.4rem .8rem" : "0.5rem 1rem")};
	font-size: 0.75rem;
	font-weight: 500;
	cursor: pointer;
	align-self: flex-start;
	margin-right: 0.8rem;
`;

const Div = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

const A = styled.a`
	display: block;
	color: inherit;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

const HeaderGrid = ({ data }) => {
	const articles = data.articles;
	console.log(articles);
	console.log(moment(articles[0].publishedAt).fromNow());
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
							<Button>{articles[0].source.name}</Button>
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
							<Button small>{articles[1].source.name}</Button>
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
							<Button small>{articles[2].source.name}</Button>
							<p>{moment(articles[2].publishedAt).fromNow()}</p>
						</Div>
					</Description>
				</GridItem>
			</Grid>
		</Header>
	);
};

export default HeaderGrid;
