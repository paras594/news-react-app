import React from "react";
import styled from "styled-components";

const Section = styled.section`
	margin: 3rem 0;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Items = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 1rem;
	/* border: 1px solid black; */
	margin: 1rem 0;
`;

const Item = styled.div`
	/* border: 1px solid red; */
	img {
		border-radius: 0.6rem;
		width: 100%;
		height: 10rem;
		object-fit: cover;
	}

	h2 {
		font-size: 0.9rem;
		padding: 0.1rem 0.3rem;
		line-height: 1.5;
		color: rgba(0, 0, 0, 0.8);
	}
`;

const Button = styled.button`
	border: none;
	background: #eee;
	border-radius: 1rem;
	padding: 0.5rem 1.2rem;
	font-size: 0.8rem;
	font-weight: 400;
	margin-left: 0.5rem;
	cursor: pointer;
`;

const TrendingSection = () => {
	return (
		<Section>
			<Header>
				<h2>Trending</h2>
				<Button>View More</Button>
			</Header>

			<Items>
				<Item>
					<img
						src="https://cdn.cnn.com/cnnnext/dam/assets/180625093716-01-trump-pondering-062118-medium-tease.jpg"
						alt=""
					/>
					<h2>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Blanditiis, corporis distinctio, iste numquam libero
						cupiditate.
					</h2>
				</Item>
				<Item>
					<img
						src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/320/180/640_john_krasinski_golden_globes_getty.jpg?tl=1&ve=1"
						alt=""
					/>
					<h2>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Blanditiis, corporis distinctio, iste numquam libero
						cupiditate.
					</h2>
				</Item>
				<Item>
					<img
						src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2020/02/320/180/AP20052122746467.jpg?tl=1&ve=1"
						alt=""
					/>
					<h2>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Blanditiis, corporis distinctio, iste numquam libero
						cupiditate.
					</h2>
				</Item>
				<Item>
					<img
						src="https://media4.s-nbcnews.com/j/newscms/2020_08/3238376/200220-unc-chapel-hill-snow-weather-ac-754p_0035b36be2e2eb51c30d12640718ce8f.focal-600x300.jpg"
						alt=""
					/>
					<h2>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Blanditiis, corporis distinctio, iste numquam libero
						cupiditate.
					</h2>
				</Item>
			</Items>
		</Section>
	);
};

export default TrendingSection;
