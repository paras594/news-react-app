import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Button from "../styles/Button";
import SLink from "../styles/SLink";
import apiTimeoutImg from "../images/api-timeout.png";
import notFoundImg from "../images/not-found.png";
import serverErrorImg from "../images/server-error.png";
import errorImg from "../images/error.png";

/*
errors:
	{
		status: 401,
		data.code: apiKeyInvalid,
		data.msg: Your API key is invalid or incorrect. Check your key, or go to https://newsapi.org to create a free API key.
	},
	{
		status: 400,
		data.code: bad request,
		data.msg: Your API key was missing from the request, or wasn't correct.
	},
	{
		status: 429,
		data.code: Too many requests,
		data.msg: You made too many requests within a window of time and have been rate limited. Back off for a while.
	},
	{
		status: 500,
		data.code: server error,
		data.msg: Something went wrong on our side.
	},
	{
		
	}

*/

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

const Digit = styled.div`
	font-weight: 900;
	color: ${props => (props.blue ? "royalblue" : "#ddd")};
	margin: 0 1rem;
	font-family: "Monda", sans-serif;
	line-height: 1;
	font-size: ${props => (props.big ? "15rem" : "11rem")};
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
