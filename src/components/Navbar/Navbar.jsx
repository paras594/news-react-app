import React, { useState, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import BrandName from "./BrandName";
import Icon from "../../styles/Icon";
import Button from "../../styles/Button";
import {
	secondary,
	buttonTextDark,
	buttonBgLight,
} from "../../styles/Variables";
import { trim } from "../../utility/helper";

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 3rem;
	margin-bottom: 1rem;
	margin-top: 0.8rem;

	@media (max-width: 650px) {
		flex-direction: column;
		height: auto;
		justify-content: center;
	}
`;

const Form = styled.form`
	display: flex;

	@media (max-width: 650px) {
		margin-top: 0.8rem;
	}

	@media (max-width: 450px) {
		width: 100%;
	}

	input {
		width: 14rem;
		font-size: 0.85rem;
		border-radius: 4rem;
		border: 1px solid rgba(0, 0, 0, 0.2);
		outline: none;
		padding: 0.4rem 0.7rem;
		margin-right: 0.4rem;

		@media (max-width: 650px) {
			width: 18rem;
		}

		@media (max-width: 450px) {
			width: 100%;
			flex: 1;
		}

		&:focus {
			border: 1px solid ${secondary};
		}
	}
`;

const Navbar = () => {
	const [value, setValue] = useState("");
	const [showText, setShowText] = useState(true);
	const history = useHistory();
	const under450 = window.matchMedia(
		"(min-width: 1px) and (max-width: 450px)"
	);

	useLayoutEffect(() => {
		const under450Handler = x => {
			if (x.matches) {
				setShowText(false);
			} else {
				setShowText(true);
			}
		};

		under450Handler(under450);

		under450.addListener(under450Handler);

		return () => under450.removeListener(under450Handler);
	}, []);

	function handleInputChange(e) {
		setValue(e.target.value);
	}

	function handleFormSubmit(e) {
		e.preventDefault();
		const trimmedValue = trim(value);

		if (!trimmedValue) {
			setValue(trimmedValue);
			return;
		}
		history.push(`/search-results/${value}`);
		setValue("");
	}

	return (
		<Nav>
			<BrandName />
			<Form onSubmit={handleFormSubmit}>
				<input type="text" value={value} onChange={handleInputChange} />
				<Button type="submit" bg={buttonBgLight} color={buttonTextDark}>
					<Icon
						mright={showText ? ".3rem" : "0"}
						fontSize=".8rem"
						className="fas fa-search"
					/>
					{showText ? "Search" : null}
				</Button>
			</Form>
		</Nav>
	);
};

export default Navbar;
