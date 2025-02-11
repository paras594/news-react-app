import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { fadeOutItem } from "../styles/animations";
import { secondary, mainLight } from "../styles/Variables";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
	width: 100%;
	height: 18rem;
	display: flex;
	justify-content: center;
	align-items: center;

	&.fade-out {
		animation: ${fadeOutItem} 1s ease;
	}
`;

const Div = styled.div`
	width: 4rem;
	height: 4rem;
	border: 0.4rem solid;
	border-color: ${secondary} ${mainLight} ${mainLight} ${mainLight};
	background: transparent;
	border-radius: 50%;
	animation: ${rotate} 1s infinite;

	@media (max-width: 700px) {
		width: 3rem;
		height: 3rem;
		border: 0.3rem solid;
		border-color: ${secondary} ${mainLight} ${mainLight} ${mainLight};
	}
`;

const Loader = () => {
	const [fadeOut, setFadeOut] = useState(false);
	useEffect(() => {
		return () => {
			setFadeOut(true);
		};
	}, []);
	return (
		<LoaderContainer className={fadeOut ? "fadeOut" : ""}>
			<Div />
		</LoaderContainer>
	);
};

export default Loader;
