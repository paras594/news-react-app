import React from "react";
import styled from "styled-components";
import SLink from "../../styles/SLink";
import { H4 } from "../../styles/Typography";
import { brandFont } from "../../styles/Variables";

const Title = styled(H4)`
	padding: 0 0.5rem;
	font-family: ${brandFont};
`;

const BrandName = () => {
	return (
		<SLink to="/">
			<Title>The News Station</Title>
		</SLink>
	);
};

export default BrandName;
