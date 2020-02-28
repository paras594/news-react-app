import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { truncate } from "../utility/helper";
import noImgPlaceholder from "../images/no-img-available.jpg";

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

	h1 {
		color: #fff;
		font-size: 2rem;
		line-height: 1.3;
		margin-bottom: 0.4rem;
		font-weight: 700;
	}

	h2 {
		font-size: 1.2rem;
		color: #fff;
		line-height: 1.3;
		font-weight: 600;
		margin-bottom: 0.4rem;
	}

	p {
		font-weight: 500;
		line-height: 1.4;
		font-size: ${props => props.pSize};
		color: rgba(255, 255, 255, 0.85);
	}
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 3fr 2fr;
	grid-template-rows: 12rem 12rem;
	grid-template-areas:
		"first second"
		"first third";
	gap: 0.8rem;

	div {
		border-radius: 1rem;
		overflow: hidden;
		height: 100%;
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

const HeaderGrid = () => {
	const [gridData, setGridData] = useState([]);

	useEffect(() => {
		let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=3&apiKey=${
			process.env.API_KEY
		}`;

		axios.get(url).then(res => {
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
		});
	}, []);

	/*
		[
			{
				"source":{"id":"bbc-news","name":"BBC News"},
				"author":"BBC News",
				"title":"Harvey Weinstein accusers welcome rape conviction",
				"description":"Lawyers for the ex-movie mogul, who is taken to hospital with reported chest pains, vow to appeal.",
				"url":"http://www.bbc.co.uk/news/world-us-canada-51624248",
				"urlToImage":"https://ichef.bbci.co.uk/images/ic/1024x576/p084ml9j.jpg",
				"publishedAt":"2020-02-25T04:20:54Z",
				"content":"Media captionHarvey Weinstein survivors described as 'heroic'\r\nAccusers of Harvey Weinstein have welcomed the guilty verdicts in the rape and sexual assault case against the former Hollywood mogul.\r\nActress Rose McGowan told the BBC \"this is a great day\", whi… [+6176 chars]"
			},
		]

	 */

	return gridData.length > 0 ? (
		<header>
			<Grid>
				<div className="first">
					<img src={gridData[0].urlToImage} alt={gridData[0].author} />
					<Description pSize="1rem">
						<h1>{gridData[0].title}</h1>
						<p>{truncate(gridData[0].description, 180)}</p>
					</Description>
				</div>
				<div className="second">
					<img src={gridData[1].urlToImage} alt={gridData[1].author} />
					<Description pSize=".8rem">
						<h2>{truncate(gridData[1].title, 100)}</h2>
						<p>{truncate(gridData[1].description, 100)}</p>
					</Description>
				</div>
				<div className="third">
					<img src={gridData[2].urlToImage} alt={gridData[2].author} />
					<Description pSize=".8rem">
						<h2>{truncate(gridData[2].title, 100)}</h2>
						<p>{truncate(gridData[2].description, 100)}</p>
					</Description>
				</div>
			</Grid>
		</header>
	) : (
		<h1>Loading...</h1>
	);
};

export default HeaderGrid;
