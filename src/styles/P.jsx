import styled from "styled-components";
import { FontQuickSand } from "./Variables";

const P = styled.p`
	font-size: ${props => (props.size ? props.size : "1rem")};
	font-family: ${FontQuickSand};
	line-height: ${props => (props.lineHeight ? props.lineHeight : "1.4")};
	color: ${props => (props.color ? props.color : "#000")};
	font-weight: ${props => (props.weight ? props.weight : "normal")};
`;

export default P;
