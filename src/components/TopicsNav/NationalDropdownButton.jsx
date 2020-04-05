import React, { useRef } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import newsCountries from "../../utility/newsCountries";
import Button from "../../styles/Button";
import Icon from "../../styles/Icon";
import SLink from "../../styles/SLink";
import {
	dropdownBg,
	dropdownShadow,
	hoverBgDark,
	hoverTextLight,
	buttonBgDark,
	buttonTextLight,
} from "../../styles/Variables";

const Div = styled.div`
	display: inline-block;
	height: 100%;
`;

const Dropdown = styled.ul`
	position: absolute;
	top: calc(100% + 0.4rem);
	left: 0;
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
		height: 256px;
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

const NationalDropdownButton = () => {
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
			<Button
				bg={buttonBgDark}
				color={buttonTextLight}
				height="100%"
				onClick={toggleDropdown}
			>
				National <Icon mleft=".5rem" className="fas fa-angle-down" />
			</Button>
			<Dropdown ref={dropdown}>
				{newsCountries.map(country => (
					<li key={uuid()}>
						<SLink
							display="block"
							to={`/country/${country.countryCode}`}
							onClick={toggleDropdown}
						>
							{country.countryName}
						</SLink>
					</li>
				))}
			</Dropdown>
		</Div>
	);
};

export default NationalDropdownButton;
