import React from "react";
import styled from "styled-components";

import NewsSections from "./NewsSections";
import newsCategories from "../utility/newsCategories";
const Div = styled.div`
	/*border: 1px solid black;*/
	flex: 1;
`;

const Main = () => {
	return (
		<Div>
			{newsCategories.map(item => (
				<NewsSections
					key={item.categoryUrl}
					category={item.category}
					categoryUrl={item.categoryUrl}
				/>
			))}
		</Div>
	);
};

export default Main;
