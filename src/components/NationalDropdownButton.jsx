import React, { useState } from "react";
import styled from "styled-components";
import newsCountries from "../utility/newsCountries";
import { v4 as uuid } from "uuid";
import Button from "../styles/Button";
import Icon from "../styles/Icon";
import SLink from "../styles/SLink";
import { clrBlue } from "../styles/Variables";

const Div = styled.div`
	position: relative;
	display: inline-block;
	height: 100%;
`;

const Dropdown = styled.ul`
	position: absolute;
	top: calc(100% + 0.4rem);
	left: 0;
	list-style: none;
	background: #fff;
	width: 14rem;
	height: ${props => props.height};
	overflow-y: auto;
	padding: 0.5rem 0;
	transition: height 0.3s ease, opacity 0.4s ease;
	opacity: ${props => props.opacity};
	display: ${props => props.display};
	z-index: 99;
	box-shadow: 0 0.8rem 1.5rem rgba(0, 0, 0, 0.25);
	border-top-left-radius: 0.5rem;
	border-bottom-left-radius: 0.5rem;

	li {
		padding: 0.5rem 1rem;
		color: rgba(0, 0, 0, 0.8);
		transition: background 0.15s ease, color 0.1s ease;

		&:hover {
			background: ${clrBlue};
			color: #fff;
		}
	}
`;

const NationalDropdownButton = () => {
	const [opacity, setOpacity] = useState(0);
	const [display, setDisplay] = useState("none");
	const [height, setHeight] = useState("0");
	const [open, setOpen] = useState(false);

	function openDropdown() {
		setDisplay("block");
		setTimeout(() => {
			setOpacity(1);
			setHeight("14rem");
			setOpen(true);
		}, 10);
	}

	function closeDropdown() {
		setOpacity(0);
		setHeight("0");
		setTimeout(() => {
			setDisplay("none");
			setOpen(false);
		}, 500);
	}

	function handleClick() {
		if (!open) {
			openDropdown();
		} else {
			closeDropdown();
		}
	}

	return (
		<Div>
			<Button height="100%" onClick={handleClick}>
				National <Icon mleft=".5rem" className="fas fa-angle-down" />
			</Button>
			<Dropdown opacity={opacity} display={display} height={height}>
				{newsCountries.map(country => (
					<li key={uuid()}>
						<SLink
							display="block"
							to={`/country/${country.countryCode}`}
							onClick={() => closeDropdown()}
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
