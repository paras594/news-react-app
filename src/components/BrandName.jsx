import React from "react";
import styled from "styled-components";
import SLink from "../styles/SLink";

const Title = styled.h2`
	font-size: 1.3rem;
	padding: 0 0.5rem;
	font-family: "Cinzel Decorative", sans-serif;
`;

const BrandName = () => {
	return (
		<SLink to="/">
			<Title>The News Station</Title>
		</SLink>
	);
};

export default BrandName;
