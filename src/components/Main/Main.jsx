import React from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import NewsSections from "./NewsSections";
import newsCategories from "../../utility/newsCategories";

const Div = styled.div`
	flex: 1;
`;

const Main = ({ response }) => {
	const categories = newsCategories.map(item => item.category);
	// zip the categories with response
	const newsData = response.map((item, i) => {
		return {
			category: categories[i],
			data: item.data.articles,
		};
	});

	return (
		<Div>
			{newsData.map(item => (
				<NewsSections
					key={uuid()}
					category={item.category}
					data={item.data}
				/>
			))}
		</Div>
	);
};

export default Main;
