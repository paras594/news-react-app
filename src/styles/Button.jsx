import styled from "styled-components";
import { FontQuickSand, clrBlue, clrLightGrey } from "../styles/Variables";

const Button = styled.button`
	display: inline-flex;
	align-items: center;
	height: ${props => (props.height ? props.height : "auto")};
	background: ${props => (props.bg ? props.bg : clrLightGrey)};
	color: ${props => (props.color ? props.color : "#000")};
	border: 0;
	border-radius: 2rem;
	box-shadow: ${props => (props.shadow ? "0 2px 8px rgba(0, 0, 0, 0.1)" : 0)};
	padding: ${props => (props.small ? "0.4rem .8rem" : "0.5rem 1.2rem")};
	margin-top: ${props => (props.mtop ? props.mtop : 0)};
	margin-right: ${props => (props.mright ? props.mright : 0)};
	margin-bottom: ${props => (props.mbottom ? props.mbottom : 0)};
	margin-left: ${props => (props.mleft ? props.mleft : 0)};
	font-size: ${props => (props.fontSize ? props.fontSize : "0.86rem")};
	font-weight: 500;
	font-family: ${FontQuickSand};
	transition: background 0.15s ease, color 0.1s ease;
	cursor: pointer;
	outline: none;

	&::-moz-focus-inner {
		border: 0;
	}

	&:hover {
		background: ${clrBlue};
		color: #fff;
	}
`;

export default Button;
