import React from "react";
import styled from "styled-components";

const Grid = styled.div`
	display: grid;
	grid-template-areas:
		"first first second"
		"first first third";
	gap: 0.8rem;

	div {
		border-radius: 1rem;
		overflow: hidden;
		height: 100%;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.first {
		position: relative;
		grid-area: first;
	}

	.second {
		position: relative;
		grid-area: second;
		height: calc(90vw / 3 / 2.2);
	}

	.third {
		position: relative;
		grid-area: third;
		height: calc(90vw / 3 / 2.2);
	}

	h1 {
		position: absolute;
		bottom: 0;
		left: 0;
		color: #fff;
		font-size: 1.4rem;
		margin: 0.6rem 0.8rem;
		padding: 0.2rem;
		background: rgba(0, 0, 0, 0.4);
		border-radius: 0.4rem;
	}
	h2 {
		position: absolute;
		bottom: 0;
		left: 0;
		color: #fff;
		font-size: 1.1rem;
		margin: 0.6rem 0.8rem;
		padding: 0.2rem;
		background: rgba(0, 0, 0, 0.4);
		border-radius: 0.4rem;
	}
`;

const HeaderGrid = () => {
	return (
		<header>
			<Grid>
				<div className="first">
					<img
						src="https://cdn.cnn.com/cnnnext/dam/assets/200205151534-modern-explorers-space-photography-18-medium-tease.jpg"
						alt=""
					/>
					<h1>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Nulla reprehenderit, reiciendis, ad obcaecati quidem ducimus!
					</h1>
				</div>
				<div className="second">
					<img
						src="https://cdn.cnn.com/cnnnext/dam/assets/200128095812-mike-pompeo-file-medium-tease.jpg"
						alt=""
					/>
					<h2>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Enim, quae quasi, facilis eius voluptates eos.
					</h2>
				</div>
				<div className="third">
					<img
						src="https://cdn.cnn.com/cnnnext/dam/assets/200220152131-panama-drug-bust-semi-submersible-boat-medium-tease.jpg"
						alt=""
					/>
					<h2>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Nobis consequuntur nemo cum esse corrupti suscipit quo,
						nesciunt et impedit incidunt.
					</h2>
				</div>
			</Grid>
		</header>
	);
};

export default HeaderGrid;
