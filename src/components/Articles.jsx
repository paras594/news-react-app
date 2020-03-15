import React, { useEffect } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import NewsItem from "../components/NewsItem";

const Section = styled.section`
	margin-right: 1.5rem;
	display: flex;
	flex-direction: column;
`;

const Articles = ({ data }) => {
	useEffect(() => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}, [data]);

	return (
		<Section>
			{data.map(article => (
				<NewsItem key={uuid()} article={article} />
			))}
		</Section>
	);
};

export default Articles;
