import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Button from "../styles/Button";
import SLink from "../styles/SLink";
import apiTimeoutImg from "../images/api-timeout.png";
import notFoundImg from "../images/not-found.png";
import serverErrorImg from "../images/server-error.png";
import errorImg from "../images/error.png";

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

const CallFinishedErrorPage = () => {
	const newsState = useSelector(state => state.news);
	const errorsMap = {
		"426": {
			img: apiTimeoutImg,
			title: "Sorry, We are out of resources for today.",
			description:
				"Api call limit of the day is over because we are running on a free plan. Calls will refresh tomorrow.",
		},
		"429": {
			img: serverErrorImg,
			title: "Oh no! The server isn't feeling good.",
			description:
				"The API responded with an error. Try going back or come back again later.",
		},
		"404": {
			img: notFoundImg,
			title: "Oops! We could not find your page.",
			description:
				"Your requested page is not found. You might have mistyped or the page has been moved. Try going back to home.",
		},
		error: {
			img: errorImg,
			title: "Looks like something went wrong.",
			description:
				"An error occured, please go back to homepage or come back again later.",
		},
	};

	const { error } = newsState;
	console.log("error-page: ", error);

	const errorType = errorsMap[error.status] || errorsMap["error"];

	console.log(errorType);

	return (
		<Div>
			<ErrorCode>
				<img src={errorType.img} alt="api-timeout-img" />
			</ErrorCode>
			<H2>{errorType.title}</H2>
			<P>{errorType.description}</P>
			<SLink to="/">
				<Button>Go Back to Home</Button>
			</SLink>
		</Div>
	);
};

export default CallFinishedErrorPage;
