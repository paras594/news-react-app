import React from "react";
import styled from "styled-components";
import { primary, footerText } from "../styles/Variables";

const Footer = styled.footer`
	padding: 1rem;
	text-align: center;
	font-size: 0.8rem;
	color: ${footerText};
	background: ${primary};
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
