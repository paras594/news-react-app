import React from "react";
import styled from "styled-components";
import AsideFeaturedNews from "./AsideFeaturedNews";
import AsideSectionLinks from "./AsideSectionLinks";
import { isHome } from "../../utility/helper";

const AsideContainer = styled.div`
	margin-left: 2rem;
	width: 20rem;
`;

const Aside = ({ data }) => {
	console.log("aside data:", data);
	return (
		<AsideContainer>
			<AsideFeaturedNews data={data} />
			{isHome() ? <AsideSectionLinks /> : ""}
		</AsideContainer>
	);
};

export default Aside;
