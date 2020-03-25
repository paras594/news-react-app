import React from "react";
import styled from "styled-components";
import newsCategories from "../utility/newsCategories";
import { v4 as uuid } from "uuid";
import NationalDropdownButton from "./NationalDropdownButton";
import Button from "../styles/Button";
import SNavLink from "../styles/SNavLink";

const TopicsList = styled.div`
	background: #eee;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin-top: 0.2rem;
	margin-bottom: 2rem;
	border-radius: 4rem;
	height: 2.4rem;
	z-index: 99;
`;

const TopicsNav = () => {
	return (
		<TopicsList>
			<NationalDropdownButton />
			{newsCategories.map(news => (
				<SNavLink
					height="100%"
					key={uuid()}
					to={`/category/${news.category}`}
				>
					<Button small height="100%">
						{news.category}
					</Button>
				</SNavLink>
			))}
		</TopicsList>
	);
};

export default TopicsNav;
