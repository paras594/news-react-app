import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const bubbleOne = keyframes`
  0%{ top: 0; }
  
  50%{ top: 50%; }
  
  100%{ top: 0; }
`;

const bubbleTwo = keyframes`
  0%{ left: 100%; }
  
  50%{ left: 50%; }
  
  100%{ left: 100%; }
`;

const bubbleThree = keyframes`
  0%{ top: 100%; }
  
  50%{ top: 50%; }
  
  100%{ top: 100%; }
`;

const bubbleFour = keyframes`
  0%{ left: 0; }
  
  50%{ left: 50%; }
  
  100%{ left: 0; }
`;

const Container = styled.div`
	width: 3rem;
	height: 3rem;
	position: relative;
	animation: ${rotate} 1.5s infinite linear;
`;

const Bubble = styled.div`
	position: absolute;
	border-radius: 50%;
	width: 1rem;
	z-index: 99;
	height: 1rem;
	background: rgba(0, 0, 255, 0.4);
	transform: translate(-50%, -50%);
	animation: ${props => props.animation} 1.2s infinite ease-in-out;
`;

const BubbleOne = styled(Bubble)`
	top: 0;
	left: 50%;
`;

const BubbleTwo = styled(Bubble)`
	top: 50%;
	left: 100%;
`;

const BubbleThree = styled(Bubble)`
	top: 100%;
	left: 50%;
`;

const BubbleFour = styled(Bubble)`
	top: 50%;
	left: 0;
`;

const Loader = () => {
	return (
		<Container>
			<BubbleOne animation={bubbleOne} />
			<BubbleTwo animation={bubbleTwo} />
			<BubbleThree animation={bubbleThree} />
			<BubbleFour animation={bubbleFour} />
		</Container>
	);
};

export default Loader;
