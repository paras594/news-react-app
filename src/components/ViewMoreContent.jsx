import React, { useEffect } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
// import usePagination from "../utility/usePagination";
import NewsItem from "../components/Main/NewsItem";

const Article = styled.div`
	display: grid;
	grid-template-columns: 14rem 1fr;
	margin-top: 1rem;
	margin-bottom: 1.5rem;
	margin-left: 0.4rem;
	margin-right: 1.8rem;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 0.5rem;
	overflow: hidden;

	img {
	}
`;

const ViewMoreContent = ({ viewMoreData }) => {
	useEffect(() => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	});

	return (
		<div>
			{viewMoreData.map(article => (
				<NewsItem key={uuid()} article={article} />
			))}
		</div>
	);
};

export default ViewMoreContent;
