import React from "react";
import styled from "styled-components";
import { H3 } from "../../styles/Headings";
import newsCategories from "../../utility/newsCategories";
import { v4 as uuid } from "uuid";

const Div = styled.div`
	border-radius: 1rem;
	background: #efefef;
	width: 100%;
	padding: 1rem 1.6rem;
	position: sticky;
	top: 1rem;
	margin-top: 1rem;
`;

const Buttons = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 0.6rem;
	align-items: flex-start;

	button {
		border: none;
		background: transparent;
		font-size: 1rem;
		margin-bottom: 0.6rem;
		padding: 0.4rem 0.8rem;
		border-radius: 2rem;
		cursor: pointer;
		color: rgba(0, 0, 0, 0.8);
		transition: background 0.25s ease;
		outline: none;

		i {
			font-size: 0.9rem;
			margin-right: 0.2rem;
			color: rgba(0, 0, 0, 0.6);
		}

		&:hover {
			background: #ccc;
		}
	}
`;

const AsideSectionLinks = () => {
	function handleClick(id) {
		document.getElementById(id).scrollIntoView({
			behaviour: "smooth",
			block: "start",
		});
	}

	return (
		<Div>
			<H3>Jump To Section</H3>
			<Buttons>
				{newsCategories.map(item => (
					<button key={uuid()} onClick={() => handleClick(item.category)}>
						<i className="fas fa-link" /> {item.category}
					</button>
				))}
			</Buttons>
		</Div>
	);
};

export default AsideSectionLinks;
