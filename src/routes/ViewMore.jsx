import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import Aside from "../components/Aside/Aside";
import ViewMoreContent from "../components/ViewMoreContent";
import Pagination from "../components/Pagination";
import axios from "axios";
import { H1 } from "../styles/Headings";

const FlexContainer = styled.section`
	display: flex;
`;

const Main = styled.div`
	flex: 1;
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

const ViewMore = () => {
	const [totalData, setTotalData] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [viewMoreData, setViewMoreData] = useState([]);
	const location = useLocation();
	const { url, category } = location.state;
	const pageSize = 10;
	const maxDataLimit = 100;

	useEffect(() => {
		axios
			.get(url, {
				params: {
					page: currentPage,
					pageSize,
				},
			})
			.then(res => {
				let { articles, totalResults } = res.data;
				setTotalData(totalResults);
				setViewMoreData(articles);
			})
			.catch(err => {
				console.log(err.response);
			});
	}, [currentPage, url]);

	return (
		<>
			<A to="/">
				<i class="fas fa-angle-left" /> Go to Home
			</A>
			<H1>{category}</H1>
			<FlexContainer>
				{viewMoreData.length > 0 ? (
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
				) : (
					<h1>Loading...</h1>
				)}
				<Aside />
			</FlexContainer>
		</>
	);
};

export default ViewMore;
