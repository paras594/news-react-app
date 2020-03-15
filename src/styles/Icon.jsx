import styled from "styled-components";

const Icon = styled.i`
	font-size: ${props => (props.fontSize ? props.fontSize : "1rem")};
	margin-top: ${props => (props.mtop ? props.mtop : 0)};
	margin-right: ${props => (props.mright ? props.mright : 0)};
	margin-bottom: ${props => (props.mbottom ? props.mbottom : 0)};
	margin-left: ${props => (props.mleft ? props.mleft : 0)};
`;

export default Icon;
