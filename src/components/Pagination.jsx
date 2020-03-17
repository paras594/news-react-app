import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { clrLightGrey, clrBlue } from "../styles/Variables";

const PaginationContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-right: 1.8rem;
	margin-top: 2rem;
	margin-bottom: 2rem;
`;
const Button = styled.button`
	border-radius: 50%;
	height: 2.4rem;
	width: 2.4rem;
	display: flex;
	align-items: center;
	justify-content: center;
	outline: none;
	font-size: 1rem;
	background: ${clrLightGrey};
	border: none;
	cursor: pointer;
	color: rgba(0, 0, 0, 0.8);
`;

const PageButtons = styled.div`
	border-radius: 4rem;
	overflow: hidden;
	background: ${clrLightGrey};
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 0.6rem;
	height: 2.4rem;
	padding: 0 0.5rem;

	button {
		border-radius: 50%;
		height: 1.6rem;
		width: 1.6rem;
		background: none;
		border: none;
		cursor: pointer;
		display: flex;
		outline: none;
		justify-content: center;
		align-items: center;
		font-size: 0.8rem;
		color: rgba(0, 0, 0, 0.9);

		&.active {
			background: ${clrBlue};
			color: #fff;
		}
	}
`;

const Pagination = ({
	totalData,
	currentPage,
	setCurrentPage,
	buttons,
	perPage,
}) => {
	const [totalPages, setTotalPages] = useState(0);
	const [pages, setPages] = useState([]);

	useEffect(() => {
		const num = Math.ceil(totalData / perPage);
		setTotalPages(num);
	}, []);

	useEffect(() => {
		if (totalPages > 0) {
			let arr = [];
			let right = currentPage + Math.floor(buttons / 2);
			let left = currentPage - Math.floor(buttons / 2);

			if (left < 1) {
				left = 1;
				right = buttons;
			}

			if (right > totalPages) {
				left = totalPages - buttons + 1;
				right = totalPages;

				if (left < 1) {
					left = 1;
				}
			}

			for (let i = left; i <= right; i++) {
				arr.push(i);
			}

			setPages(arr);
		}
	}, [totalPages]);

	const handlePrevClick = useCallback(() => {
		setCurrentPage(currentPage - 1);
	}, [currentPage]);

	const handleNextClick = useCallback(() => {
		setCurrentPage(currentPage + 1);
	}, [currentPage]);

	return (
		<PaginationContainer>
			<Button onClick={handlePrevClick}>
				<i className="fas fa-angle-left" />
			</Button>
			<PageButtons>
				{pages.map(page => (
					<button
						className={currentPage === page ? "active" : ""}
						key={page}
						onClick={() => setCurrentPage(page)}
					>
						{page}
					</button>
				))}
			</PageButtons>
			<Button onClick={handleNextClick}>
				<i className="fas fa-angle-right" />
			</Button>
		</PaginationContainer>
	);
};

export default Pagination;
