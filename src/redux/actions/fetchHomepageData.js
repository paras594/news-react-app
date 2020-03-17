import { startLoading, errorOccured, setHomepageData } from "./actions";
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
				headerData: headerRes.data,
				trendingData: trendingRes.data,
				featuredData: featuredRes.data,
				mainRes,
			};

			dispatch(setHomepageData(dataObj));
		} catch (err) {
			dispatch(errorOccured(err));
		}
	};
}
