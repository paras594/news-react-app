import {
	startLoading,
	stopLoading,
	errorOccured,
	setHomepageData,
} from "./actions";
import getHomepageData from "../../utility/getHomepageData";

export default function fetchHomepageData() {
	return async dispatch => {
		dispatch(startLoading());

		try {
			const {
				headerRes,
				trendingRes,
				featuredRes,
				mainRes,
			} = await getHomepageData();

			const dataObj = {
				headerData: headerRes.data.articles,
				trendingData: trendingRes.data.articles,
				featuredData: featuredRes.data.articles,
				mainRes,
			};

			dispatch(setHomepageData(dataObj));
		} catch (err) {
			dispatch(errorOccured(err));
		} finally {
			dispatch(stopLoading());
		}
	};
}
