import React, { useEffect } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import NewsItem from "../components/NewsItem";

const Section = styled.section`
	margin-right: 1.5rem;
	display: flex;
	flex-direction: column;
`;

const ViewMoreContent = ({ viewMoreData }) => {
	useEffect(() => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}, [viewMoreData]);

	return (
		<Section>
			{viewMoreData.map(article => (
				<NewsItem key={uuid()} article={article} />
			))}
		</Section>
	);
};

export default ViewMoreContent;
