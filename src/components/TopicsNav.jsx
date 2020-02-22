import React from "react";
import styled from "styled-components";

const TopicsList = styled.div`
	background: #eee;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin-top: 0.2rem;
	margin-bottom: 2rem;
	border-radius: 4rem;
	height: 2.4rem;

	p {
		font-weight: 500;
		color: rgba(0, 0, 0, 0.8);
		font-size: 0.9rem;
	}
`;

const TopicsNav = () => {
	return (
		<TopicsList>
			<p>International</p>
			<p>National</p>
			<p>Sports</p>
			<p>Politics</p>
			<p>Business</p>
			<p>Technology</p>
			<p>Bollywood</p>
			<p>Hollywood</p>
			<p>Entertainment</p>
		</TopicsList>
	);
};

export default TopicsNav;
