export function startLoading() {
	return {
		type: "START_LOADING",
	};
}

export function stopLoading() {
	return {
		type: "STOP_LOADING",
	};
}

export function errorOccured(err) {
	return {
		type: "ERROR_OCCURED",
		payload: err,
	};
}

export function setHomepageData(dataObj) {
	return {
		type: "SET_HOMEPAGE_DATA",
		payload: dataObj,
	};
}

export function setArticlesAndAside(dataObj) {
	return {
		type: "SET_ARTICLES_AND_ASIDE",
		payload: dataObj,
	};
}
