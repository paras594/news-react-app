import React from "react";
import styled from "styled-components";

const Div = styled.div`
	border-radius: 1rem;
	align-self: flex-start;
	/*border: 1px solid red;*/
	background: #efefef;
	width: 20rem;
	margin-left: 1rem;
	padding: 1rem 1.2rem;
`;

const FeaturedItems = styled.div`
	/*border: 1px solid blue;*/
`;

const Item = styled.div`
	margin-bottom: 2rem;
	/*border: 1px solid rgba(0, 0, 0, 0.1);*/

	img {
		width: 100%;
		height: 11rem;
		border-radius: 0.5rem;
	}
	p {
		font-weight: 700;
		margin-top: 0.4rem;
		padding: 0 0.6rem;
		font-size: 0.9rem;
		line-height: 1.5;
		color: rgba(0, 0, 0, 0.9);
	}
`;

const H3 = styled.h3`
	margin-top: 0.5rem;
	margin-bottom: 0.8rem;
	padding: 0 0.2rem;
	font-size: 1.4rem;
`;

const Button = styled.button`
	border: none;
	background: #fff;
	border-radius: 1rem;
	padding: 0.5rem 1.2rem;
	display: block;
	font-size: 0.8rem;
	font-weight: 400;
	margin: 0 auto;
	cursor: pointer;
`;

const Aside = () => {
	return (
		<Div>
			<H3>Featured</H3>
			<FeaturedItems>
				<Item>
					<img
						src="https://smedia2.intoday.in/aajtak/images/stories/092019/pm_modi_donald_trump_1582285399_618x347.jpeg"
						alt=""
					/>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Neque non, doloribus officia ipsa laborum ipsum iusto,
						consequatur sed rem voluptas?
					</p>
				</Item>
				<Item>
					<img
						src="https://c.ndtvimg.com/2020-02/cntd4o9o_motera-cricket-stadium-afp_625x300_21_February_20.jpg"
						alt=""
					/>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Neque non, doloribus officia ipsa laborum ipsum iusto,
						consequatur sed rem voluptas?
					</p>
				</Item>
				<Item>
					<img
						src="https://c.ndtvimg.com/2019-11/ntphsn6_using-computer_625x300_04_November_19.jpg"
						alt=""
					/>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Neque non, doloribus officia ipsa laborum ipsum iusto,
						consequatur sed rem voluptas?
					</p>
				</Item>
			</FeaturedItems>
			<Button>View More</Button>
		</Div>
	);
};

export default Aside;
