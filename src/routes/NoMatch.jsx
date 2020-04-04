import React from "react";
import styled from "styled-components";
import notFoundImg from "../images/not-found.png";
import SLink from "../styles/SLink";
import Button from "../styles/Button";

const Div = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 2rem;
`;

const ErrorCode = styled.div`
	width: 60%;
	margin: 0 auto;
	height: auto;

	@media (max-width: 1100px) {
		width: 80%;
	}

	@media (max-width: 700px) {
		width: 100%;
	}

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
`;

const H2 = styled.h2`
	text-align: center;
	font-size: 2.4rem;
	margin-top: 1.5rem;

	@media (max-width: 1350px) {
		font-size: 2rem;
		margin-top: 1rem;
	}

	@media (max-width: 1100px) {
		font-size: 1.6rem;
	}

	@media (max-width: 700px) {
		font-size: 1.3rem;
	}
`;

const P = styled.p`
	color: rgba(0, 0, 0, 0.5);
	font-weight: 500;
	text-align: center;
	font-size: 1.2rem;
	width: 60%;
	margin-top: 1rem;
	margin-bottom: 2rem;
	line-height: 1.5;

	@media (max-width: 1100px) {
		font-size: 1rem;
		width: 80%;
	}

	@media (max-width: 700px) {
		width: 100%;
		margin-top: 0.5rem;
	}
`;

const NoMatch = () => {
	return (
		<Div>
			<ErrorCode>
				<img src={notFoundImg} alt="404 not found image" />
			</ErrorCode>
			<H2>Oops! We could not find your page.</H2>
			<P>
				Your requested page is not found. You might have mistyped or the
				page has been moved. Try going back to home.
			</P>
			<SLink to="/">
				<Button>Go Back to Home</Button>
			</SLink>
		</Div>
	);
};

export default NoMatch;
