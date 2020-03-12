import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, Link, Redirect } from "react-router-dom";
import axios from "axios";
import { fadeInItem } from "../styles/animations";
import { H1 } from "../styles/Headings";
import ViewMoreContent from "../components/ViewMoreContent";
import Aside from "../components/Aside/Aside";

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

const DomainNews = () => {
	const [totalData, setTotalData] = useState(0);
	const [domainData, setDomainData] = useState([]);
	const [asideData, setAsideData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);
	const params = useParams();
	const { domain } = params;
	const pageSize = 100;
	console.log(params);

	async function getData() {
		setIsLoading(true);
		try {
			const [domainRes, asideRes] = await axios.all([
				axios.get(
					`https://newsapi.org/v2/everything?domains=${domain}&apiKey=${
						process.env.API_KEY
					}`,
					{ params: { pageSize } }
				),
				axios.get(
					`https://newsapi.org/v2/everything?sources=entertainment-weekly&apiKey=${
						process.env.API_KEY
					}`,
					{ params: { pageSize: 3 } }
				),
			]);

			const { totalResults, articles } = domainRes.data;

			setTotalData(totalResults);
			setDomainData(articles);
			setAsideData(asideRes.data);
			setIsLoading(false);
		} catch (err) {
			console.log(err);
			setIsLoading(false);
			setHasError(true);
		}
	}

	useEffect(() => {
		getData();
	}, []);

	if (hasError) return <Redirect to="/calls-finished" />;
	if (isLoading || asideData.length < 1 || domainData.length < 1)
		return <h1>Loading...</h1>;

	return (
		<>
			<A to="/">
				<i className="fas fa-angle-left" /> Go to Home
			</A>
			<H1>{domain}</H1>
			<FlexContainer>
				<Main>
					<ViewMoreContent viewMoreData={domainData} />
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
	);
};

export default DomainNews;
