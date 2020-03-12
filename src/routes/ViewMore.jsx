import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
	useLocation,
	Link,
	useHistory,
	useParams,
	Redirect,
} from "react-router-dom";
import styled from "styled-components";
import Aside from "../components/Aside/Aside";
import ViewMoreContent from "../components/ViewMoreContent";
import Pagination from "../components/Pagination";
import axios from "axios";
import { H1 } from "../styles/Headings";
import Loader from "../components/Loader";
import { fadeInItem, fadeOutItem } from "../styles/animations";
import allCategoriesMap from "../utility/allCategoriesMap";
import { capitalize } from "../utility/helper";

const FlexContainer = styled.section`
	display: flex;
`;

const Main = styled.div`
	flex: 1;
	animation: 1s ${fadeInItem};
`;

const A = styled(Link)`
	border: none;
	background: #eee;
	border-radius: 1rem;
	padding: 0.5rem 1.2rem;
	font-size: 0.8rem;
	font-weight: 400;
	margin-bottom: 2rem;
	display: inline-flex;
	cursor: pointer;
	text-decoration: none;
	color: #000;
	align-items: center;

	i {
		font-size: 0.9rem;
		margin-right: 0.3rem;
	}
`;

const LoaderContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 1rem;
	height: 40rem;
	flex: 1;
	animation: 1s ${fadeOutItem};
`;

const ViewMore = () => {
	const urls = allCategoriesMap;

	const [totalData, setTotalData] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [viewMoreData, setViewMoreData] = useState([]);
	const [asideData, setAsideData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);
	const location = useLocation();
	const history = useHistory();
	const params = useParams();
	const { category, page } = params;
	const pageSize = 100;

	async function getData() {
		setIsLoading(true);
		try {
			const [categoryRes, asideRes] = await axios.all([
				axios.get(urls[capitalize(category)], { params: { pageSize } }),
				axios.get(urls["Featured"], { params: { pageSize: 3 } }),
			]);

			const { totalResults, articles } = categoryRes.data;
			setTotalData(totalResults);
			setViewMoreData(articles);
			setAsideData(asideRes.data);
			setIsLoading(false);
		} catch (err) {
			setIsLoading(false);
			setHasError(true);
		}
	}

	useEffect(() => {
		getData();
	}, [currentPage]);

	if (hasError) return <Redirect to="/calls-finished" />;
	if (isLoading || asideData.length < 1 || viewMoreData.length < 1)
		return <h1>Loading...</h1>;

	return (
		<div>
			<>
				<A to="/">
					<i className="fas fa-angle-left" /> Go to Home
				</A>
				<H1>{category}</H1>
				<FlexContainer>
					<Main>
						<ViewMoreContent viewMoreData={viewMoreData} />
						{/* <Pagination */}
						{/* 	totalData={Math.min(totalData, maxDataLimit)} */}
						{/* 	perPage={pageSize} */}
						{/* 	currentPage={currentPage} */}
						{/* 	buttons={5} */}
						{/* 	setCurrentPage={setCurrentPage} */}
						{/* /> */}
					</Main>

					<Aside data={asideData} />
				</FlexContainer>
			</>
		</div>
	);
};

export default ViewMore;
