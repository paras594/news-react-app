import styled from "styled-components";

const Container = styled.div`
	max-width: 1366px;
	margin: 0 auto;
	width: 90%;

	@media (max-width: 1550px) {
		width: 85%;
	}

	@media (max-width: 1100px) {
		width: 90%;
	}
`;

export default Container;
