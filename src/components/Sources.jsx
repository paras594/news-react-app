import React from "react";
import styled from "styled-components";

const Section = styled.section`
	margin-top: 5rem;
	margin-bottom: 6rem;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 90%;
`;

const Source = styled.a`
	display: block;
	border-radius: 2rem;
	padding: 0.6rem 1.4rem;
	margin: 0.7rem 0.5rem;
	background: #eaeaea;
	text-decoration: none;
	color: rgba(0, 0, 0, 0.7);
	font-weight: 600;
`;

const Sources = () => {
	return (
		<Section>
			<Source href="#">Google News</Source>
			<Source href="#">CNN News</Source>
			<Source href="#">ABP News</Source>
			<Source href="#">Financial Times</Source>
			<Source href="#">Bloomberg</Source>
			<Source href="#">Aaj Tak</Source>
			<Source href="#">News18</Source>
			<Source href="#">Hindustan times</Source>
			<Source href="#">ESPN</Source>
			<Source href="#">Ten Sports</Source>
		</Section>
	);
};

export default Sources;
