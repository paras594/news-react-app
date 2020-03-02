import React from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

import NewsSections from "./NewsSections";
import newsCategories from "../../utility/newsCategories";

const Div = styled.div`
	flex: 1;
`;

const Main = () => {
	return (
		<Div>
			{newsCategories.map(item => (
				<NewsSections
					key={uuid()}
					category={item.category}
					categoryUrl={item.categoryUrl}
				/>
			))}
		</Div>
	);
};

export default Main;
