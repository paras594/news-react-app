import React from "react";
import styled from "styled-components";
import notFoundImg from "../images/not-found.png";

const Div = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ErrorCode = styled.div`
	height: 15rem;
	img {
		height: 100%;
		width: auto;
		object-fit: cover;
	}
`;

const H2 = styled.h2`
	text-align: center;
	font-size: 2.4rem;
	margin-top: 1.5rem;
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
