import styled from "styled-components";
import { FontQuickSand } from "./Variables";

const H1 = styled.h1`
	font-size: 2rem;
	font-family: ${FontQuickSand};
	font-weight: 700;
	line-height: 1.3;
	color: ${props => (props.color ? props.color : "#000")};
`;

const H2 = styled.h2`
	font-size: 1.8rem;
	font-family: ${FontQuickSand};
	font-weight: ${props => (props.weight ? props.weight : "700")};
	color: ${props => (props.color ? props.color : "#000")};
`;

const H3 = styled.h3`
	font-size: 1.3rem;
	font-family: ${FontQuickSand};
	font-weight: ${props => (props.weight ? props.weight : "700")};
	line-height: 1.3;
	color: ${props => (props.color ? props.color : "#000")};
`;

const H4 = styled.h4`
	font-size: 1rem;
	font-family: ${FontQuickSand};
	font-weight: ${props => (props.weight ? props.weight : "700")};
	line-height: 1.4;
	color: ${props => (props.color ? props.color : "#000")};
`;

export { H1, H2, H3, H4 };
