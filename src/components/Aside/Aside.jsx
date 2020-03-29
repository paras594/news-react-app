import React from "react";
import styled from "styled-components";
import AsideFeaturedNews from "./AsideFeaturedNews";
import AsideSectionLinks from "./AsideSectionLinks";
import { isHome } from "../../utility/helper";

const AsideContainer = styled.div`
	margin-left: 2rem;
	width: 20rem;

	@media (max-width: 1350px) {
		width: 18rem;
		margin-left: 1rem;
	}

	@media (max-width: 1250px) {
		width: 17rem;
	}

	@media (max-width: 1100px) {
		display: none;
	}
`;

const Aside = ({ articles }) => {
	return (
		<AsideContainer>
			<AsideFeaturedNews articles={articles} />
			{isHome() ? <AsideSectionLinks /> : ""}
		</AsideContainer>
	);
};

export default Aside;
