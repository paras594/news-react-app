import styled from "styled-components";
import { Link } from "react-router-dom";

const A = styled(Link)`
	text-decoration: none;
	color: inherit;
	display: block;

	&:hover {
		text-decoration: underline;
	}
`;

export default A;
