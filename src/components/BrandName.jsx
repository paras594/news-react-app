import React from "react";
import styled from "styled-components";
import SLink from "../styles/SLink";
import { H4 } from "../styles/Typography";

const Title = styled(H4)`
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
