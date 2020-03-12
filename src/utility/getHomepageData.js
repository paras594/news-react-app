import axios from "axios";
import newsCategories from "./newsCategories";

async function getHomepageData() {
	try {
		const apikey = process.env.API_KEY;
		const headerUrl = `https://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=3&apiKey=${apikey}`;
		const trendingUrl = `https://newsapi.org/v2/top-headlines?sources=cnn&pageSize=4&apiKey=${apikey}`;
		const featuredUrl = `https://newsapi.org/v2/everything?sources=entertainment-weekly&pageSize=3&apiKey=${apikey}`;
		const mainUrls = newsCategories.map(i => i.categoryUrl);
		const mainPromises = mainUrls.map(url =>
			axios.get(url, { params: { pageSize: 4 } })
		);

		const [headerRes, trendingRes, featuredRes, ...mainRes] = await axios.all(
			[
				axios.get(headerUrl),
				axios.get(trendingUrl),
				axios.get(featuredUrl),
				...mainPromises,
			]
		);

		return {
			headerRes,
			trendingRes,
			featuredRes,
			mainRes,
		};
	} catch (err) {
		throw err.response;
	}
}

export default getHomepageData;
