import styled from "styled-components";
import { FontQuickSand } from "./Variables";

const P = styled.p`
	font-size: ${props => (props.size ? props.size : "1rem")};
	font-family: ${FontQuickSand};
	line-height: ${props => (props.lineHeight ? props.lineHeight : "1.4")};
	color: ${props => (props.color ? props.color : "#000")};
	font-weight: ${props => (props.weight ? props.weight : "normal")};
`;

const H1 = styled.h1`
	font-size: 2rem;
	font-family: ${FontQuickSand};
	font-weight: 700;
	line-height: 1.3;
	color: ${props => (props.color ? props.color : "#000")};

	@media (max-width: 1250px) {
		font-size: 1.7rem;
	}

	@media (max-width: 1000px) {
		font-size: 1.5rem;
	}
`;

const H2 = styled.h2`
	font-size: 1.8rem;
	font-family: ${FontQuickSand};
	font-weight: ${props => (props.weight ? props.weight : "700")};
	color: ${props => (props.color ? props.color : "#000")};
	@media (max-width: 1250px) {
		font-size: 1.5rem;
	}

	@media (max-width: 1000px) {
		font-size: 1.4rem;
	}
`;

const H3 = styled.h3`
	font-size: 1.6rem;
	font-family: ${FontQuickSand};
	font-weight: ${props => (props.weight ? props.weight : "700")};
	line-height: 1.3;
	color: ${props => (props.color ? props.color : "#000")};

	@media (max-width: 1250px) {
		font-size: 1.4rem;
	}

	@media (max-width: 1000px) {
		font-size: 1.3rem;
	}
`;

const H4 = styled.h4`
	font-size: 1.3rem;
	font-family: ${FontQuickSand};
	font-weight: ${props => (props.weight ? props.weight : "700")};
	line-height: 1.4;
	color: ${props => (props.color ? props.color : "#000")};

	@media (max-width: 1250px) {
		font-size: 1.1rem;
	}
`;

const H5 = styled.h5`
	font-size: 1rem;
	font-family: ${FontQuickSand};
	font-weight: ${props => (props.weight ? props.weight : "700")};
	line-height: 1.4;
	color: ${props => (props.color ? props.color : "#000")};

	@media (max-width: 1250px) {
		line-height: 1.5;
	}
`;

export { P, H1, H2, H3, H4, H5 };
