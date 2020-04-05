import React, { useRef } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import Button from "../../styles/Button";
import Icon from "../../styles/Icon";
import SLink from "../../styles/SLink";
import {
	dropdownBg,
	dropdownShadow,
	hoverTextLight,
	hoverBgDark,
} from "../../styles/Variables";

const Div = styled.div`
	display: inline-block;
	height: 100%;
`;

const Dropdown = styled.ul`
	position: absolute;
	top: calc(100% + 0.4rem);
	right: 0;
	list-style: none;
	background: ${dropdownBg};
	width: 14rem;
	height: 0;
	overflow-y: auto;
	padding: 0.5rem 0;
	transition: height 0.25s ease, opacity 0.3s ease;
	opacity: 0;
	display: none;
	z-index: 99;
	box-shadow: ${dropdownShadow};
	border-top-left-radius: 0.5rem;
	border-bottom-left-radius: 0.5rem;

	@media (max-width: 700px) {
		width: 100%;
	}

	&.open-dropdown {
		height: ${p => p.height};
		opacity: 1;
	}

	&.block {
		display: block;
	}

	li {
		font-size: 1.1rem;
		padding: 0.6rem 1rem;
		color: rgba(0, 0, 0, 0.8);
		transition: background 0.15s ease, color 0.1s ease;

		@media (max-width: 700px) {
			text-align: center;
		}

		&:hover {
			background: ${hoverBgDark};
			color: ${hoverTextLight};
		}
	}
`;

const TopicsDropdownButton = ({ topics }) => {
	const listItemRef = useRef();
	const dropdown = useRef();

	function toggleDropdown() {
		const activeElem = document.querySelector(".open-dropdown");
		const delay = activeElem ? 300 : 0;

		if (activeElem) {
			activeElem.classList.remove("open-dropdown");
			setTimeout(() => {
				activeElem.classList.remove("block");
			}, 300);
		}

		if (activeElem !== dropdown.current) {
			setTimeout(() => {
				dropdown.current.classList.add("block");

				setTimeout(() => {
					dropdown.current.classList.add("open-dropdown");
				}, 10);
			}, delay);
		}

		return;
	}

	return (
		<Div>
			<Button height="100%" onClick={toggleDropdown}>
				<Icon className="fas fa-angle-right" />
			</Button>
			<Dropdown
				ref={dropdown}
				height={topics.length === 4 ? "168px" : "256px"}
			>
				{topics.map(topic => (
					<li key={uuid()} className="list-item">
						<SLink
							ref={listItemRef}
							display="block"
							to={`/category/${topic.category}`}
							onClick={toggleDropdown}
						>
							{topic.category}
						</SLink>
					</li>
				))}
			</Dropdown>
		</Div>
	);
};

export default TopicsDropdownButton;
