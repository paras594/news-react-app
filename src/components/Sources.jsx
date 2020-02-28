import React from "react";
import styled from "styled-components";
import BBCNews from "../images/source-bbc-news.png";
import FoxNews from "../images/source-fox-news.jpg";
import CNNNews from "../images/source-cnn-news.jpg";
import Aljazeera from "../images/source-aljazeera-news.png";
import EuroNews from "../images/source-euro-news.png";
import NBCNews from "../images/source-nbc-news.png";
import NDTVNews from "../images/source-ndtv-news.png";

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
			{/* http://newsapi.org/v2/everything?sources=bbc-news&apiKey=${process.env.API_KEY} */}
			<Source href="#">
				<img src={BBCNews} alt="BBC-News Logo" />
			</Source>
			{/* http://newsapi.org/v2/everything?sources=fox-news&apiKey=${process.env.API_KEY} */}
			<Source href="#">
				<img src={FoxNews} alt="Fox-News Logo" />
			</Source>
			{/* http://newsapi.org/v2/everything?sources=cnn&apiKey=${process.env.API_KEY} */}
			<Source href="#">
				<img src={CNNNews} alt="CNN-News Logo" />
			</Source>
			{/* http://newsapi.org/v2/everything?sources=al-jazeera-english&apiKey=${process.env.API_KEY} */}
			<Source href="#">
				<img src={Aljazeera} alt="Aljazeera-News Logo" />
			</Source>
			{/* http://newsapi.org/v2/everything?domains=euronews.com&language=en&apiKey=${process.env.API_KEY} */}
			<Source href="#">
				<img src={EuroNews} alt="Euro-News Logo" />
			</Source>
			{/* http://newsapi.org/v2/everything?sources=nbc-news&apiKey=${process.env.API_KEY} */}
			<Source href="#">
				<img src={NBCNews} alt="NBC-News Logo" />
			</Source>
			{/* http://newsapi.org/v2/everything?domains=ndtv.com&apiKey=${process.env.API_KEY} */}
			<Source href="#">
				<img src={NDTVNews} alt="NDTV-News Logo" />
			</Source>
		</Section>
	);
};

export default Sources;
