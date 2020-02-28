import React from "react";
import styled from "styled-components";
import AsideForm from "./AsideForm";
import AsideFeaturedNews from "./AsideFeaturedNews";

const AsideContainer = styled.div`
	margin-left: 2rem;
	/*border: 1px solid red;*/
	width: 20rem;
`;

const Aside = () => {
	return (
		<AsideContainer>
			<AsideForm />
			<AsideFeaturedNews />
		</AsideContainer>
	);
};

export default Aside;
