import React from "react";
import styled from "styled-components";

const Section = styled.section`
	margin-bottom: 2.4rem;
`;

const NewsContents = styled.section``;

const NewsItem = styled.div`
	display: grid;
	grid-template-columns: 14rem 1fr;
	column-gap: 1rem;
	margin-top: 1rem;
	margin-bottom: 1.3rem;
	margin-left: 0.4rem;
	margin-right: 1.8rem;
`;

const ImgContainer = styled.div`
	border-radius: 0.5rem;
	overflow: hidden;
	img {
		display: block;
		width: 100%;
		height: 100%;
		min-height: calc(12rem / 1.8);
		object-fit: cover;
	}
`;

const Content = styled.div`
	h3 {
		margin-bottom: 0.1rem;
	}

	p {
		line-height: 1.4;
		padding: 0.3rem 0;
		font-size: 0.9rem;
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

const NewsSections = () => {
	return (
		<Section>
			<h2>Sports</h2>
			<NewsContents>
				<NewsItem>
					<ImgContainer>
						<img
							src="https://akm-img-a-in.tosshub.com/indiatoday/styles/magazine_top_story_483x271/public/images/story/202002/indvaust20worldcupcrowdrecord-483x271.jpeg?.kKxCwAtuk1EGrwYJabgA4ynrY3AjJAu"
							alt=""
						/>
					</ImgContainer>
					<Content>
						<h3>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Est nam illum, laborum tempora numquam?
						</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Obcaecati sed at ab? Quo, adipisci id enim quam ipsum
							temporibus animi! Lorem ipsum dolor sit amet, consectetur
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Rem nam, t.... <a href="#">more</a>
						</p>
					</Content>
				</NewsItem>
				<NewsItem>
					<ImgContainer>
						<img
							src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202002/AP20046703938199-770x433.jpeg?gG32uP6JKdpuIt4F8DmhjOaJrLVNJHzi"
							alt=""
						/>
					</ImgContainer>
					<Content>
						<h3>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Est nam illum, laborum tempora numquam?
						</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Obcaecati sed at ab? Quo, adipisci id enim quam ipsum
							temporibus animi! Lorem ipsum dolor sit amet, consectetur
							adipisicing elit. Eius, repellat.... <a href="#">more</a>
						</p>
					</Content>
				</NewsItem>
				<NewsItem>
					<ImgContainer>
						<img
							src="https://images.indianexpress.com/2020/02/manika-batra.jpg"
							alt=""
						/>
					</ImgContainer>
					<Content>
						<h3>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Est nam illum, laborum tempora numquam?
						</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Obcaecati sed at ab? Quo, adipisci id enim quam ipsum
							temporibus animi! Lorem ipsum dolor sit amet, consectetur
							adipisicing elit. Eius, repellat.... <a href="#">more</a>
						</p>
					</Content>
				</NewsItem>
				<NewsItem>
					<ImgContainer>
						<img
							src="https://images.indianexpress.com/2020/02/christian-eriksen.jpg"
							alt=""
						/>
					</ImgContainer>
					<Content>
						<h3>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Est nam illum, laborum tempora numquam?
						</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Obcaecati sed at ab? Quo, adipisci id enim quam ipsum
							temporibus animi! Lorem ipsum dolor sit amet, consectetur
							adipisicing elit. Eius, repellat.... <a href="#">more</a>
						</p>
					</Content>
				</NewsItem>
			</NewsContents>
			<Button>View More</Button>
		</Section>
	);
};

export default NewsSections;
