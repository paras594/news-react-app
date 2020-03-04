/* 
	TODO: add links 
*/
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import newsCategories from "../utility/newsCategories";
import { v4 as uuid } from "uuid";
import NationalDropdownButton from "./NationalDropdownButton";

const TopicsList = styled.div`
	background: #eee;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 0.2rem;
	margin-bottom: 2rem;
	border-radius: 4rem;
	height: 2.4rem;
	z-index: 99;
`;

const A = styled(Link)`
	font-weight: 500;
	color: rgba(0, 0, 0, 0.8);
	font-size: 0.9rem;
	text-decoration: none;
	border-radius: 2rem;
	display: flex;
	align-items: center;
	height: 100%;
	padding: 0 1rem;
	transition: background 0.25s ease-in-out;

	&:hover {
		background: #ccc;
	}
`;

const TopicsNav = () => {
	return (
		<TopicsList>
			<NationalDropdownButton />
			{newsCategories.map(news => (
				<A
					key={uuid()}
					to={{
						pathname: "/viewmore",
						state: { url: news.categoryUrl, category: news.category },
					}}
				>
					{news.category}
				</A>
			))}
		</TopicsList>
	);
};

export default TopicsNav;
