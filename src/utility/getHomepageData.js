import axios from "axios";
import newsCategories from "./newsCategories";
import { random } from "./helper";

async function getHomepageData() {
	const apikey = process.env.API_KEY;
	const headerUrl = `https://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=3&apiKey=${apikey}`;
	const trendingUrl = `https://newsapi.org/v2/top-headlines?sources=cnn&pageSize=4&apiKey=${apikey}`;
	const featuredUrl = `https://newsapi.org/v2/everything?sources=${
		random() ? "entertainment-weekly" : "mashable"
	}&pageSize=3&apiKey=${apikey}`;
	const mainUrls = newsCategories.map(i => i.categoryUrl);
	const mainPromises = mainUrls.map(url =>
		axios.get("https://cors-anywhere.herokuapp.com/" + url, {
			params: { pageSize: 4 },
		})
	);

	const [headerRes, trendingRes, featuredRes, ...mainRes] = await axios.all([
		axios.get("https://cors-anywhere.herokuapp.com/" + headerUrl),
		axios.get("https://cors-anywhere.herokuapp.com/" + trendingUrl),
		axios.get("https://cors-anywhere.herokuapp.com/" + featuredUrl),
		...mainPromises,
	]);

	return {
		headerRes,
		trendingRes,
		featuredRes,
		mainRes,
	};
}

export default getHomepageData;
