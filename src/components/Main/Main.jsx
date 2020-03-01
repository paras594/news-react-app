import React from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

import NewsSections from "./NewsSections";
import newsCategories from "../../utility/newsCategories";

const Flex = styled.div`
	flex: 1;
`;

const Main = () => {
	return (
		<Flex>
			{newsCategories.map(item => (
				<NewsSections
					key={uuid()}
					category={item.category}
					categoryUrl={item.categoryUrl}
				/>
			))}
		</Flex>
	);
};

export default Main;
