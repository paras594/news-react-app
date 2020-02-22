import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
	/* border: 1px solid red; */
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 3rem;
	margin-bottom: 1rem;
`;

const Button = styled.button`
	border: none;
	background: #eee;
	border-radius: 1rem;
	padding: 0.5rem 1.2rem;
	font-size: 0.8rem;
	font-weight: 500;
	cursor: pointer;
	margin-left: auto;
	width: 5rem;
`;

const Search = styled.div`
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 2rem;
	overflow: hidden;
	display: flex;
	input {
		border: none;
		background: transparent;
		padding: 0.2rem 1rem;
		font-size: 0.9rem;
		font-weight: 100;
		width: 14rem;
	}
`;

const Navbar = () => {
	return (
		<Nav>
			<h3>The News Station</h3>
			<Search>
				<input type="text" />
				<Button>Search</Button>
			</Search>
		</Nav>
	);
};

export default Navbar;
