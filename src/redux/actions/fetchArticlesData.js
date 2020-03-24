import {
	startLoading,
	stopLoading,
	errorOccured,
	setArticlesAndAside,
} from "./actions";
import axios from "axios";
import { random } from "../../utility/helper";

export default function fetchArticlesData(articlesUrl, pageSize) {
	return async dispatch => {
		dispatch(startLoading());
		try {
			const [sourceRes, asideRes] = await axios.all([
				axios.get(articlesUrl, { params: { pageSize } }),
				axios.get(
					`https://newsapi.org/v2/everything?sources=${
						random() ? "entertainment-weekly" : "mashable"
					}&apiKey=${process.env.API_KEY}`,
					{ params: { pageSize: 3 } }
				),
			]);

			const { totalResults, articles } = sourceRes.data;

			const dataObj = {
				totalArticles: totalResults,
				articlesData: articles,
				asideData: asideRes.data.articles,
			};

			dispatch(setArticlesAndAside(dataObj));
		} catch (err) {
			dispatch(errorOccured(err));
		} finally {
			dispatch(stopLoading());
		}
	};
}
