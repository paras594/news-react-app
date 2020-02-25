import React from "react";
import styled from "styled-components";

const Section = styled.section`
	margin-top: 5rem;
	margin-bottom: 6rem;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	/*width: 90%;*/
`;

const Source = styled.a`
	display: flex;
	height: 7rem;
	width: 7rem;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	overflow: hidden;
	border: 1px solid rgba(0, 0, 0, 0.3);

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const Sources = () => {
	return (
		<Section>
			<Source href="#">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png"
					alt=""
				/>
			</Source>
			<Source href="#">
				<img
					src="https://pmcvariety.files.wordpress.com/2013/12/fox-news-logo.jpg?w=1000"
					alt=""
				/>
			</Source>
			<Source href="#">
				<img
					src="https://www.waterstudio.nl/wp-content/uploads/2014/08/CNN-logo-1024x616.jpg"
					alt=""
				/>
			</Source>
			<Source href="#">
				<img
					src="https://www.kindpng.com/picc/m/34-348847_al-jazeera-english-logo-hd-png-download.png"
					alt=""
				/>
			</Source>
			<Source href="#">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/3/39/Euronews._2016_alternative_logo.png"
					alt=""
				/>
			</Source>
			<Source href="#">
				<img
					src="https://assets0.uswitch.com/_img/library/news_image/sky_news_logo_634x306x24_expand_h8dc84238.jpg"
					alt=""
				/>
			</Source>
			<Source href="#">
				<img
					src="https://images-eu.ssl-images-amazon.com/images/I/310vvusqwQL.png"
					alt=""
				/>
			</Source>
		</Section>
	);
};

export default Sources;
