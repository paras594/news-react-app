import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { truncate } from "../utility/helper";
import noImgPlaceholder from "../images/no-img-available.jpg";
import A from "../styles/A";
import { H1, H3 } from "../styles/Headings";
import P from "../styles/P";
import Loader from "./Loader";
import { fadeInItem, fadeOutItem } from "../styles/animations";

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
	background: rgb(0, 0, 0);
	background: linear-gradient(
		0deg,
		rgba(0, 0, 0, 0.7) 0%,
		rgba(0, 0, 0, 0.5) 40%,
		rgba(0, 0, 0, 0.3) 70%,
		rgba(0, 0, 0, 0) 100%
	);
`;

const MainTitle = styled(H1)`
	margin-bottom: 0.4rem;
`;

const Title = styled(H3)`
	margin-bottom: 0.4rem;
`;

const LoaderContainer = styled.div`
	height: 25rem;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 1rem;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: 1s ${fadeOutItem};
`;

const HeaderGrid = () => {
	const [gridData, setGridData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=3&apiKey=${
			process.env.API_KEY
		}`;

		setIsLoading(true);

		axios
			.get(url)
			.then(res => {
				let { articles } = res.data;

				articles.forEach(article => {
					if (!article.urlToImage) {
						article.urlToImage = noImgPlaceholder;
					}

					if (!article.author) {
						article.author = "Headlines";
					}

					if (!article.description) {
						article.description = "No description available for this.";
					}
				});

				setGridData(articles);
				setIsLoading(false);
			})
			.catch(err => {
				console.log(err.response.data);
				setIsLoading(false);
			});
	}, []);

	return gridData.length < 1 || isLoading ? (
		<LoaderContainer>
			<Loader />
		</LoaderContainer>
	) : (
		<Header>
			<Grid>
				<GridItem className="first">
					<img src={gridData[0].urlToImage} alt={gridData[0].author} />
					<Description>
						<MainTitle color="#fff">
							<A
								to={{
									pathname: "/news-content",
									state: { article: gridData[0] },
								}}
							>
								{truncate(gridData[0].title, 100)}
							</A>
						</MainTitle>
						<P weight="500" color="rgba(255, 255, 255, 0.9)">
							{truncate(gridData[0].description, 180)}
						</P>
					</Description>
				</GridItem>
				<GridItem className="second">
					<img src={gridData[1].urlToImage} alt={gridData[1].author} />
					<Description>
						<Title color="#fff">
							<A
								to={{
									pathname: "/news-content",
									state: { article: gridData[1] },
								}}
							>
								{truncate(gridData[1].title, 100)}
							</A>
						</Title>
						<P
							weight="500"
							color="rgba(255, 255, 255, 0.85)"
							size="0.8rem"
						>
							{truncate(gridData[1].description, 100)}
						</P>
					</Description>
				</GridItem>
				<GridItem className="third">
					<img src={gridData[2].urlToImage} alt={gridData[2].author} />
					<Description pSize=".8rem">
						<Title color="#fff">
							<A
								to={{
									pathname: "/news-content",
									state: { article: gridData[2] },
								}}
							>
								{truncate(gridData[2].title, 100)}
							</A>
						</Title>
						<P
							weight="500"
							color="rgba(255, 255, 255, 0.85)"
							size="0.8rem"
						>
							{truncate(gridData[2].description, 100)}
						</P>
					</Description>
				</GridItem>
			</Grid>
		</Header>
	);
};

export default HeaderGrid;
