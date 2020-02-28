import React from "react";
import styled from "styled-components";

const H3 = styled.h3`
	margin-top: 0.5rem;
	margin-bottom: 0.8rem;
	/*padding: 0 1rem;*/
	font-size: 1.4rem;
`;

const Form = styled.form`
	background: #efefef;
	width: 100%;
	padding: 1rem 1.6rem;
	border-radius: 1rem;
	margin-bottom: 1rem;

	div {
		display: flex;
		margin-bottom: 1rem;
		align-items: center;
		padding: 0 0.4rem;
		label {
			font-weight: 500;
			font-size: 0.9rem;
			width: 8rem;
		}

		select {
			all: unset;
			background: #fff;
			color: rgba(0, 0, 0, 0.9);
			width: 6rem;
			padding: 0.3rem 0.8rem;
			font-size: 0.9rem;
			font-weight: 500;
			border-radius: 2rem;
			position: relative;
			&::after {
				content: "";
				border: 4px solid red;
				position: absolute;
				right: 0;
				top: 0;
			}
		}
	}

	button {
		margin: 0 auto;
		display: block;
		border-radius: 2rem;
		background: #fff;
		border: none;
		padding: 0.5rem 1.5rem;
		margin-top: 1.4rem;
		font-size: 0.9rem;
	}
`;

const AsideForm = () => {
	return (
		<Form>
			<H3>Search News</H3>
			<div>
				<label htmlFor="country">Choose Country : </label>
				<select name="country" id="country">
					<option value="all">All</option>
					<option value="india">India</option>
					<option value="usa">USA</option>
					<option value="argentina">Argentina</option>
					<option value="china">China</option>
					<option value="indonesia">Indonesia</option>
					<option value="japan">Japan</option>
				</select>
			</div>
			<div>
				<label htmlFor="country">Choose Source : </label>
				<select name="source" id="source">
					<option value="all">All</option>
					<option value="abp-news">ABP News</option>
					<option value="bbc-news">BBC News</option>
					<option value="ndtv">NDTV</option>
					<option value="new18">News18</option>
					<option value="fox-news">Fox News</option>
					<option value="cnn-news">CNN News</option>
				</select>
			</div>
			<button>Search</button>
		</Form>
	);
};

export default AsideForm;
