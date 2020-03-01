import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";
import NewsItem from "../components/NewsItem";

const ViewMoreContent = ({ viewMoreData }) => {
	useEffect(() => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}, [viewMoreData]);

	return (
		<div>
			{viewMoreData.map(article => (
				<NewsItem key={uuid()} article={article} />
			))}
		</div>
	);
};

export default ViewMoreContent;
