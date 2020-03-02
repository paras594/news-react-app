import React from "react";
import styled from "styled-components";
import AsideFeaturedNews from "./AsideFeaturedNews";
import AsideSectionLinks from "./AsideSectionLinks";
import { isHome } from "../../utility/helper";

const AsideContainer = styled.div`
	margin-left: 2rem;
	width: 20rem;
`;

const Aside = () => {
	return (
		<AsideContainer>
			<AsideFeaturedNews />
			{isHome() ? <AsideSectionLinks /> : ""}
		</AsideContainer>
	);
};

export default Aside;
