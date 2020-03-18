import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fadeInItem } from "../styles/animations";
import { H1 } from "../styles/Typography";
import Aside from "../components/Aside/Aside";
import Articles from "../components/Articles";
import Pagination from "./Pagination";
import SLink from "../styles/SLink";
import Icon from "../styles/Icon";
import Button from "../styles/Button";

const Wrapper = styled.div`
	animation: ${fadeInItem} 1s ease;
`;

const FlexContainer = styled.section`
	display: flex;
`;

const Main = styled.div`
	flex: 1;
`;

const ArticlesAsideContainer = ({
	totalData,
	title,
	articlesData,
	asideData,
	hasError,
}) => {
	const [pageData, setPageData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 10;
	const buttons = 5;

	useEffect(() => {
		let startIndex = currentPage * pageSize - pageSize;
		let endIndex = currentPage * pageSize;
		let data = articlesData.slice(startIndex, endIndex);

		setPageData(data);
	}, [currentPage]);

	return (
		<Wrapper>
			<SLink mbottom="2rem" to="/">
				<Button>
					<Icon mright=".5rem" className="fas fa-angle-left" /> Go to Home
				</Button>
			</SLink>
			<H1>{title}</H1>
			{!hasError && totalData === 0 ? (
				<h1>No Results Found.</h1>
			) : (
				<FlexContainer>
					<Main>
						<Articles data={pageData} />
						<Pagination
							totalData={totalData}
							perPage={pageSize}
							currentPage={currentPage}
							buttons={buttons}
							setCurrentPage={setCurrentPage}
						/>
					</Main>

					<Aside articles={asideData} />
				</FlexContainer>
			)}
		</Wrapper>
	);
};

export default ArticlesAsideContainer;
