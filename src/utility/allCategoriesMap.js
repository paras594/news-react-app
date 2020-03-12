const allCategoriesMap = {
	Trending: `https://newsapi.org/v2/everything?sources=cnn&language=en&apiKey=${
		process.env.API_KEY
	}`,
	Featured: `https://newsapi.org/v2/everything?sources=entertainment-weekly&apiKey=${
		process.env.API_KEY
	}`,
	International: `https://newsapi.org/v2/everything?sources=newsweek&apiKey=${
		process.env.API_KEY
	}`,
	Political: `https://newsapi.org/v2/everything?domains=politico.com&apiKey=${
		process.env.API_KEY
	}`,
	Business: `https://newsapi.org/v2/everything?sources=cnbc&apiKey=${
		process.env.API_KEY
	}`,
	Sports: `https://newsapi.org/v2/everything?sources=bbc-sport&apiKey=${
		process.env.API_KEY
	}`,
	Hollywood: `https://newsapi.org/v2/everything?domains=perezhilton.com&apiKey=${
		process.env.API_KEY
	}`,
	Bollywood: `https://newsapi.org/v2/everything?domains=pinkvilla.com&apiKey=${
		process.env.API_KEY
	}`,
	Entertainment: `https://newsapi.org/v2/everything?sources=buzzfeed&apiKey=${
		process.env.API_KEY
	}`,
	Health: `https://newsapi.org/v2/everything?sources=medical-news-today&apiKey=${
		process.env.API_KEY
	}`,
	Science: `https://newsapi.org/v2/everything?sources=national-geographic&apiKey=${
		process.env.API_KEY
	}`,
	Technology: `https://newsapi.org/v2/everything?sources=techradar&apiKey=${
		process.env.API_KEY
	}`,
};

export default allCategoriesMap;
