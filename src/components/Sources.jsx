import React from "react";
import styled from "styled-components";
import BBCNews from "../images/source-bbc-news.png";
import FoxNews from "../images/source-fox-news.jpg";
import CNNNews from "../images/source-cnn-news.jpg";
import Aljazeera from "../images/source-aljazeera-news.png";
import EuroNews from "../images/source-euro-news.png";
import NBCNews from "../images/source-nbc-news.png";
import NDTVNews from "../images/source-ndtv-news.png";
import { Link } from "react-router-dom";

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

const StyledLink = styled(Link)`
	display: flex;
	height: 7rem;
	width: 7rem;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	overflow: hidden;
	border: 1px solid rgba(0, 0, 0, 0.3);
`;

const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const Sources = () => {
	return (
		<Section>
			{/* http://newsapi.org/v2/everything?sources=bbc-news&apiKey=${process.env.API_KEY} */}
			<StyledLink
				to={{
					pathname: "/viewmore",
					state: {
						url: `https://newsapi.org/v2/everything?sources=bbc-news&apiKey=${
							process.env.API_KEY
						}`,
						category: "BBC News",
					},
				}}
			>
				<Img src={BBCNews} alt="BBC-News Logo" />
			</StyledLink>
			{/* http://newsapi.org/v2/everything?sources=fox-news&apiKey=${process.env.API_KEY} */}
			<StyledLink
				to={{
					pathname: "/viewmore",
					state: {
						url: `https://newsapi.org/v2/everything?sources=fox-news&apiKey=${
							process.env.API_KEY
						}`,
						category: "Fox News",
					},
				}}
			>
				<Img src={FoxNews} alt="Fox-News Logo" />
			</StyledLink>
			{/* http://newsapi.org/v2/everything?sources=cnn&apiKey=${process.env.API_KEY} */}
			<StyledLink
				to={{
					pathname: "/viewmore",
					state: {
						url: `https://newsapi.org/v2/everything?sources=cnn&apiKey=${
							process.env.API_KEY
						}`,
						category: "CNN News",
					},
				}}
			>
				<Img src={CNNNews} alt="CNN-News Logo" />
			</StyledLink>
			{/* http://newsapi.org/v2/everything?sources=al-jazeera-english&apiKey=${process.env.API_KEY} */}
			<StyledLink
				to={{
					pathname: "/viewmore",
					state: {
						url: `https://newsapi.org/v2/everything?sources=al-jazeera-english&apiKey=${
							process.env.API_KEY
						}`,
						category: "Aljazeera News",
					},
				}}
			>
				<Img src={Aljazeera} alt="Aljazeera-News Logo" />
			</StyledLink>
			{/* http://newsapi.org/v2/everything?domains=euronews.com&language=en&apiKey=${process.env.API_KEY} */}
			<StyledLink
				to={{
					pathname: "/viewmore",
					state: {
						url: `https://newsapi.org/v2/everything?domains=euronews.com&language=en&apiKey=${
							process.env.API_KEY
						}`,
						category: "Euro News",
					},
				}}
			>
				<Img src={EuroNews} alt="Euro-News Logo" />
			</StyledLink>
			{/* http://newsapi.org/v2/everything?sources=nbc-news&apiKey=${process.env.API_KEY} */}
			<StyledLink
				to={{
					pathname: "/viewmore",
					state: {
						url: `https://newsapi.org/v2/everything?sources=nbc-news&apiKey=${
							process.env.API_KEY
						}`,
						category: "NBC News",
					},
				}}
			>
				<Img src={NBCNews} alt="NBC-News Logo" />
			</StyledLink>
			{/* http://newsapi.org/v2/everything?domains=ndtv.com&apiKey=${process.env.API_KEY} */}
			<StyledLink
				to={{
					pathname: "/viewmore",
					state: {
						url: `https://newsapi.org/v2/everything?domains=ndtv.com&apiKey=${
							process.env.API_KEY
						}`,
						category: "NDTV News",
					},
				}}
			>
				<Img src={NDTVNews} alt="NDTV-News Logo" />
			</StyledLink>
		</Section>
	);
};

export default Sources;
