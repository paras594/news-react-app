import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import BrandName from "./BrandName";
import Icon from "../styles/Icon";
import Button from "../styles/Button";
import { clrBlue } from "../styles/Variables";

const Nav = styled.nav`
	/* border: 1px solid red; */
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 3rem;
	margin-bottom: 1rem;
	margin-top: 0.8rem;
`;

const Form = styled.form`
	display: flex;
	input {
		width: 14rem;
		font-size: 0.85rem;
		border-radius: 4rem;
		border: 1px solid rgba(0, 0, 0, 0.2);
		outline: none;
		padding: 0.4rem 0.7rem;
		margin-right: 0.4rem;

		&:focus {
			border: 1px solid ${clrBlue};
		}
	}
`;

const Navbar = () => {
	const [value, setValue] = useState("");
	const history = useHistory();

	function handleInputChange(e) {
		setValue(e.target.value);
	}

	function handleFormSubmit(e) {
		e.preventDefault();
		history.push(`/search-results/${value}`);
		setValue("");
	}

	return (
		<Nav>
			<BrandName />
			<Form onSubmit={handleFormSubmit}>
				<input type="text" value={value} onChange={handleInputChange} />
				<Button type="submit">
					<Icon
						mright=".3rem"
						fontSize=".8rem"
						className="fas fa-search"
					/>
					Search
				</Button>
			</Form>
		</Nav>
	);
};

export default Navbar;
