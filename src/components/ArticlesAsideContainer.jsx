import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Aside from "../components/Aside/Aside";
import Articles from "../components/Articles";
import Pagination from "./Pagination";
import { capitalize } from "../utility/helper";
import { H1 } from "../styles/Typography";
import { fadeInItem } from "../styles/animations";
import SLink from "../styles/SLink";
import Icon from "../styles/Icon";
import Button from "../styles/Button";
import { buttonBgLight, buttonTextDark } from "../styles/Variables";

const Wrapper = styled.div`
	animation: ${fadeInItem} 1s ease;
`;

const FlexContainer = styled.section`
	display: flex;
`;

const Main = styled.div`
	flex: 1;
`;

const Error = styled.h1`
	font-size: 1.4rem;
	margin: 1.4rem 0;
	font-weight: 100;
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
				<Button bg={buttonBgLight} color={buttonTextDark}>
					<Icon mright=".5rem" className="fas fa-angle-left" /> Go to Home
				</Button>
			</SLink>
			<H1>{capitalize(title)}</H1>
			{!hasError && totalData === 0 ? (
				<Error>Oops! No Results Found. Try again with a valid query.</Error>
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
