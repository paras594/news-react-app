/* 
	TODO: add styles for heading, img, p
*/

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation, Link, useHistory } from "react-router-dom";
import Aside from "../components/Aside/Aside";

const FlexContainer = styled.section`
	display: flex;
`;

const Main = styled.div`
	flex: 1;
	margin-right: 2rem;
	margin-left: 0.5rem;
	img {
		width: 100%;
		height: auto;
		border-radius: 1rem;
		margin-bottom: 1rem;
	}

	p {
		line-height: 1.5;
		font-size: 1rem;
	}

	.date {
		margin-bottom: 1rem;
	}

	.description {
		margin: 1rem 0;
	}

	.url {
		margin-top: 2rem;
		font-weight: 500;
	}
`;

const Button = styled.button`
	border: none;
	background: #eee;
	border-radius: 1rem;
	padding: 0.5rem 1.2rem;
	font-size: 0.8rem;
	font-weight: 400;
	font-family: "Quicksand";
	margin-bottom: 2rem;
	display: inline-flex;
	cursor: pointer;
	color: #000;

	align-items: center;

	i {
		font-size: 0.9rem;
		margin-right: 0.3rem;
	}
`;

const NewsPage = () => {
	const location = useLocation();
	const history = useHistory();
	const { article } = location.state;
	console.log(article.content);

	function handleClick() {
		history.goBack();
	}

	return (
		<>
			<Button onClick={handleClick}>
				<i class="fas fa-angle-left" /> Go Back
			</Button>
			<FlexContainer>
				<Main>
					<img src={article.urlToImage} alt="" />
					<p className="date">Published At: 28th February, 2018</p>
					<h1>{article.title}</h1>
					<p className="description">{article.description}</p>
					<p>{article.content}</p>
					<p className="url">
						Read Full Article Here:{" "}
						<a
							rel="noopener noreferrer"
							target="_blank"
							href={article.url}
						>
							{article.url}
						</a>
					</p>
				</Main>
				<Aside />
			</FlexContainer>
		</>
	);
};

export default NewsPage;
