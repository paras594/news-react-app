import { createSelector } from "reselect";

const selectNews = state => state.news;

const selectHeaderData = createSelector(
	selectNews,
	news => news.headerData
);

const selectTrendingData = createSelector(
	selectNews,
	news => news.trendingData
);

const selectFeaturedData = createSelector(
	selectNews,
	news => news.featuredData
);

const selectMainRes = createSelector(
	selectNews,
	news => news.mainRes
);

const selectTotalArticles = createSelector(
	selectNews,
	news => news.totalArticles
);

const selectArticlesData = createSelector(
	selectNews,
	news => news.articlesData
);

export const selectIsLoading = createSelector(
	selectNews,
	news => news.isLoading
);

export const selectHasError = createSelector(
	selectNews,
	news => news.hasError
);

export const selectHomepageData = createSelector(
	[selectHeaderData, selectTrendingData, selectFeaturedData, selectMainRes],
	(headerData, trendingData, featuredData, mainRes) => ({
		headerData,
		trendingData,
		featuredData,
		mainRes,
	})
);

export const selectArticlesAndAsideData = createSelector(
	[selectFeaturedData, selectArticlesData, selectTotalArticles],
	(featuredData, articlesData, totalArticles) => ({
		featuredData,
		articlesData,
		totalArticles,
	})
);

export const selectError = createSelector(
	selectNews,
	news => news.error
);
