import React from "react";
import styled from "styled-components";
import { H3 } from "../../styles/Typography";
import newsCategories from "../../utility/newsCategories";
import { v4 as uuid } from "uuid";
import Button from "../../styles/Button";
import Icon from "../../styles/Icon";
import { asideBgColor, buttonTextDark } from "../../styles/Variables";

const Div = styled.div`
	border-radius: 1rem;
	background: ${asideBgColor};
	width: 100%;
	padding: 1rem 1.6rem;
	position: sticky;
	top: 1rem;
	margin-top: 1rem;
`;

const Buttons = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 0.6rem;
	align-items: flex-start;
`;

const Flex = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 0.5rem;
`;

const Title = styled(H3)`
	margin-bottom: 1rem;
	margin-top: 0.3rem;
`;

const AsideSectionLinks = () => {
	function handleClick(id) {
		document.getElementById(id).scrollIntoView({
			behaviour: "smooth",
			block: "start",
		});
	}

	return (
		<Div>
			<Title>Jump To Section</Title>
			<Buttons>
				{newsCategories.map(item => (
					<Flex key={uuid()}>
						<Icon className="fas fa-link" mright=".8rem" />{" "}
						<Button
							fontSize="1rem"
							small
							bg={asideBgColor}
							color={buttonTextDark}
							onClick={() => handleClick(item.category)}
						>
							{item.category}
						</Button>
					</Flex>
				))}
			</Buttons>
		</Div>
	);
};

export default AsideSectionLinks;
