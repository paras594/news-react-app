import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import newsCountries from "../utility/newsCountries";
import { v4 as uuid } from "uuid";

const Div = styled.div`
	position: relative;
	display: inline-block;
	height: 100%;
`;

const Button = styled.button`
	font-weight: 500;
	color: rgba(0, 0, 0, 0.8);
	font-size: 0.9rem;
	border: none;
	border-radius: 2rem;
	cursor: pointer;
	background: transparent;
	display: flex;
	align-items: center;
	font-family: "Quicksand", sans-serif;
	height: 100%;
	padding: 0 1rem;
	outline: none;
	transition: background 0.25s ease-in-out;

	&::-moz-focus-inner {
		border: 0;
	}

	&:hover {
		background: #ccc;
	}

	i {
		margin-left: 0.4rem;
	}
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
	box-shadow: 0 0.8rem 1.5rem rgba(0, 0, 0, 0.2);
	border-top-left-radius: 0.5rem;
	border-bottom-left-radius: 0.5rem;

	li {
		padding: 0.5rem 1rem;
		color: rgba(0, 0, 0, 0.8);
		transition: background 0.25s ease;
		&:hover {
			background: #ccc;
		}

		a {
			text-decoration: none;
			font-size: 1rem;
			color: inherit;
			display: block;
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
			<Button onClick={handleClick}>
				National <i className="fas fa-angle-down" />
			</Button>
			<Dropdown opacity={opacity} display={display} height={height}>
				{newsCountries.map(country => (
					<li key={uuid()}>
						<Link
							to={`/country/${country.countryCode}`}
							onClick={() => closeDropdown()}
						>
							{country.countryName}
						</Link>
					</li>
				))}
			</Dropdown>
		</Div>
	);
};

export default NationalDropdownButton;
