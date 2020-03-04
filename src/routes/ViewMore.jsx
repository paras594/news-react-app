import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import Aside from "../components/Aside/Aside";
import ViewMoreContent from "../components/ViewMoreContent";
import Pagination from "../components/Pagination";
import axios from "axios";
import { H1 } from "../styles/Headings";
import Loader from "../components/Loader";
import { fadeInItem, fadeOutItem } from "../styles/animations";

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
	const [totalData, setTotalData] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [viewMoreData, setViewMoreData] = useState([]);
	const [noDataFound, setNoDataFound] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const location = useLocation();
	const { url, category } = location.state;
	const pageSize = 10;
	const maxDataLimit = 100;

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(url, {
				params: {
					page: currentPage,
					pageSize,
				},
			})
			.then(res => {
				let { articles, totalResults } = res.data;
				if (!articles.length) {
					setIsLoading(false);
					setNoDataFound(true);
				} else {
					setTotalData(totalResults);
					setViewMoreData(articles);
					setIsLoading(false);
				}
			})
			.catch(err => {
				console.log(err.response.data);
				setIsLoading(false);
			});
	}, [currentPage, url]);

	return (
		<>
			<A to="/">
				<i className="fas fa-angle-left" /> Go to Home
			</A>
			<H1>{category}</H1>
			<FlexContainer>
				{noDataFound ? (
					<h1>No Data Found</h1>
				) : isLoading ? (
					<LoaderContainer>
						<Loader />
					</LoaderContainer>
				) : (
					<Main>
						<ViewMoreContent viewMoreData={viewMoreData} />
						<Pagination
							totalData={Math.min(totalData, maxDataLimit)}
							perPage={pageSize}
							currentPage={currentPage}
							buttons={5}
							setCurrentPage={setCurrentPage}
						/>
					</Main>
				)}
				<Aside />
			</FlexContainer>
		</>
	);
};

export default ViewMore;
