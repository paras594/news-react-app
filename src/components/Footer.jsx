import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
	padding: 1rem;
	text-align: center;
	font-size: 0.8rem;
	color: #fff;
	background: #000;
	display: block;
	width: 100%;
	a {
		color: inherit;
	}
`;

export default () => {
	return (
		<Footer>
			Powered by{" "}
			<a href="https://newsapi.org/" target="_blank">
				NewsAPI.org
			</a>
		</Footer>
	);
};
