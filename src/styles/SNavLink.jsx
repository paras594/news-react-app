import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { buttonTextLight, primary } from "./Variables";

const SNavLink = styled(NavLink)`
	text-decoration: none;
	color: inherit;
	height: ${props => (props.height ? props.height : "auto")};
	display: ${props => (props.display ? props.display : "inline-block")};
	margin-top: ${props => (props.mtop ? props.mtop : 0)};
	margin-right: ${props => (props.mright ? props.mright : 0)};
	margin-bottom: ${props => (props.mbottom ? props.mbottom : 0)};
	margin-left: ${props => (props.mleft ? props.mleft : 0)};

	&.active {
		button {
			background: ${primary};
			color: ${buttonTextLight};
		}
	}
`;

export default SNavLink;
