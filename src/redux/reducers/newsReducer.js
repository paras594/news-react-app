const initialState = {
	headerData: [],
	trendingData: [],
	featuredData: [],
	mainRes: [],
	articlesData: [],
	totalArticles: 0,
	hasError: false,
	error: {},
	isLoading: false,
};

const newsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_LOADING":
			return {
				...state,
				isLoading: true,
			};

		case "STOP_LOADING":
			return {
				...state,
				isLoading: false,
			};

		case "ERROR_OCCURED":
			return {
				...state,
				isLoading: false,
				hasError: true,
				error: action.payload,
			};

		case "SET_HOMEPAGE_DATA":
			return {
				...state,
				headerData: action.payload.headerData,
				trendingData: action.payload.trendingData,
				featuredData: action.payload.featuredData,
				mainRes: action.payload.mainRes,
				isLoading: false,
			};
		case "SET_ARTICLES_AND_ASIDE":
			return {
				...state,
				totalArticles: action.payload.totalArticles,
				articlesData: action.payload.articlesData,
				featuredData: action.payload.asideData,
				isLoading: false,
			};

		default:
			return state;
	}
};

export default newsReducer;
