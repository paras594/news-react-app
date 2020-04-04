import styled from "styled-components";

const A = styled.a`
	display: block;
	color: inherit;
	text-decoration: none;
	font-family: inherit;
	height: ${props => (props.height ? props.height : "")};

	&:hover {
		text-decoration: underline;
	}
`;

export default A;
