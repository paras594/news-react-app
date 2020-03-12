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
			<StyledLink to="/source/bbc-news">
				<Img src={BBCNews} alt="BBC-News Logo" />
			</StyledLink>
			<StyledLink to="/source/fox-news">
				<Img src={FoxNews} alt="Fox-News Logo" />
			</StyledLink>
			<StyledLink to="/source/cnn">
				<Img src={CNNNews} alt="CNN-News Logo" />
			</StyledLink>
			<StyledLink to="/source/al-jazeera-english">
				<Img src={Aljazeera} alt="Aljazeera-News Logo" />
			</StyledLink>
			<StyledLink to="/domain/euronews.com">
				<Img src={EuroNews} alt="Euro-News Logo" />
			</StyledLink>
			<StyledLink to="/source/nbc-news">
				<Img src={NBCNews} alt="NBC-News Logo" />
			</StyledLink>
			<StyledLink to="/domain/ndtv.com">
				<Img src={NDTVNews} alt="NDTV-News Logo" />
			</StyledLink>
		</Section>
	);
};

export default Sources;
