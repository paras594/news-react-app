import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import BrandName from "./BrandName";

const Nav = styled.nav`
	/* border: 1px solid red; */
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 3rem;
	margin-bottom: 1rem;
	margin-top: 0.8rem;
`;

const Button = styled.button`
	padding: 0 1rem;
	border-radius: 4rem;
	border: none;
	font-size: 0.8rem;
	background: #efefef;

	i {
		margin-right: 0.3rem;
		font-size: 0.7rem;
	}
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
			border: 1px solid royalblue;
		}
	}
`;

const Navbar = () => {
	const [value, setValue] = useState("");
	const history = useHistory();

	useEffect(() => {
		console.log(history);
	}, []);

	function handleInputChange(e) {
		setValue(e.target.value);
	}

	function handleFormSubmit(e) {
		e.preventDefault();
		history.push("/viewmore", {
			url: `http://newsapi.org/v2/everything?qInTitle=${value}&apiKey=${
				process.env.API_KEY
			}`,
			category: "Search Results",
		});

		setValue("");
	}

	return (
		<Nav>
			<BrandName />
			<Form onSubmit={handleFormSubmit}>
				<input type="text" value={value} onChange={handleInputChange} />
				<Button type="submit">
					<i className="fas fa-search" />
					Search
				</Button>
			</Form>
		</Nav>
	);
};

export default Navbar;
