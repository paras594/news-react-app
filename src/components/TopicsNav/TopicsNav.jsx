import React, { useState, useLayoutEffect, useEffect, useRef } from "react";
import styled from "styled-components";
import newsCategories from "../../utility/newsCategories";
import { v4 as uuid } from "uuid";
import NationalDropdownButton from "./NationalDropdownButton";
import Button from "../../styles/Button";
import SNavLink from "../../styles/SNavLink";
import TopicsDropdownButton from "./TopicsDropdownButton";
import { primary } from "../../styles/Variables";

const TopicsList = styled.div`
	position: relative;
	background: ${primary};
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 0.2rem;
	margin-bottom: 2rem;
	border-radius: 5rem;
	height: 2.4rem;
	z-index: 99;

	@media (max-width: 1250px) {
		margin-bottom: 1.4rem;
	}
`;

const TopicsNav = () => {
	const [navItems, setNavItems] = useState([]);
	const [dropdownItems, setDropdownItems] = useState([]);
	const [end, setEnd] = useState(newsCategories.length);
	const nationBtnRef = useRef();

	const under450 = window.matchMedia(
		"(min-width: 1px) and (max-width: 450px)"
	);

	const under700 = window.matchMedia(
		"(min-width: 451px) and (max-width: 700px)"
	);

	const under1000 = window.matchMedia(
		"(min-width: 701px) and (max-width: 1000px)"
	);

	const above1000 = window.matchMedia("(min-width: 1001px)");

	useLayoutEffect(() => {
		const under450Handler = x => {
			if (x.matches) {
				setEnd(2);
			}
			return;
		};

		const under700Handler = x => {
			if (x.matches) {
				setEnd(3);
			}
			return;
		};

		const under1000Handler = x => {
			if (x.matches) {
				setEnd(6);
			}

			return;
		};

		const above1000Handler = x => {
			if (x.matches) {
				setEnd(newsCategories.length);
			}
			return;
		};

		under450Handler(under450);
		under700Handler(under700);
		under1000Handler(under1000);
		above1000Handler(above1000);

		under450.addListener(under450Handler);
		under700.addListener(under700Handler);
		under1000.addListener(under1000Handler);
		above1000.addListener(above1000Handler);
		return () => {
			console.log("calling clean up");
			under450.removeListener(under450Handler);
			under700.removeListener(under700Handler);
			under1000.removeListener(under1000Handler);
			above1000.removeListener(above1000Handler);
		};
	}, []);

	useEffect(() => {
		let tempNavItems = newsCategories.slice(0, end);
		let tempDropdownItems = newsCategories.slice(end);

		setNavItems(tempNavItems);
		setDropdownItems(tempDropdownItems);
	}, [end]);

	return (
		<TopicsList>
			<NationalDropdownButton nationBtnRef={nationBtnRef} />
			{navItems.map(news => (
				<SNavLink
					height="100%"
					key={uuid()}
					to={`/category/${news.category}`}
				>
					<Button small height="100%">
						{news.category}
					</Button>
				</SNavLink>
			))}
			{dropdownItems.length > 0 ? (
				<TopicsDropdownButton topics={dropdownItems} />
			) : (
				""
			)}
		</TopicsList>
	);
};

export default TopicsNav;
