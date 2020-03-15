import styled from "styled-components";
import { Link } from "react-router-dom";

const SLink = styled(Link)`
	text-decoration: none;
	color: inherit;
	height: ${props => (props.height ? props.height : "auto")};
	display: ${props => (props.display ? props.display : "inline-block")};
	margin-top: ${props => (props.mtop ? props.mtop : 0)};
	margin-right: ${props => (props.mright ? props.mright : 0)};
	margin-bottom: ${props => (props.mbottom ? props.mbottom : 0)};
	margin-left: ${props => (props.mleft ? props.mleft : 0)};
`;

export default SLink;
