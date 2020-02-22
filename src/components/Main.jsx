import React from "react";
import styled from "styled-components";

import NewsSections from "./NewsSections";

const Div = styled.div`
	/*border: 1px solid black;*/
	flex: 1;
`;

const Main = () => {
	return (
		<Div>
			<NewsSections />
			<NewsSections />
			<NewsSections />
			<NewsSections />
		</Div>
	);
};

export default Main;
