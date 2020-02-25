const newsCategories = [
	{
		category: "General",
		categoryUrl: `https://newsapi.org/v2/everything?sources=newsweek&pageSize=4&apiKey=${
			process.env.API_KEY
		}`,
	},
	{
		category: "Political",
		categoryUrl: `https://newsapi.org/v2/everything?domains=politico.com&pageSize=4&apiKey=${
			process.env.API_KEY
		}`,
	},
	{
		category: "Business",
		categoryUrl: `https://newsapi.org/v2/everything?sources=cnbc&pageSize=4&apiKey=${
			process.env.API_KEY
		}`,
	},
	{
		category: "Sports",
		categoryUrl: `https://newsapi.org/v2/everything?sources=bbc-sport&pageSize=4&apiKey=${
			process.env.API_KEY
		}`,
	},
	{
		category: "Hollywood",
		categoryUrl: `https://newsapi.org/v2/everything?domains=perezhilton.com&pageSize=4&apiKey=${
			process.env.API_KEY
		}`,
	},
	{
		category: "Bollywood",
		categoryUrl: `https://newsapi.org/v2/everything?domains=pinkvilla.com&pageSize=4&apiKey=${
			process.env.API_KEY
		}`,
	},
	{
		category: "Entertainment",
		categoryUrl: `https://newsapi.org/v2/everything?sources=buzzfeed&pageSize=4&apiKey=${
			process.env.API_KEY
		}`,
	},

	{
		category: "Health",
		categoryUrl: `https://newsapi.org/v2/everything?sources=medical-news-today&pageSize=4&apiKey=${
			process.env.API_KEY
		}`,
	},
	{
		category: "Science",
		categoryUrl: `https://newsapi.org/v2/everything?sources=national-geographic&pageSize=4&apiKey=${
			process.env.API_KEY
		}`,
	},
	{
		category: "Technology",
		categoryUrl: `https://newsapi.org/v2/everything?sources=techradar&pageSize=4&apiKey=${
			process.env.API_KEY
		}`,
	},
];

export default newsCategories;
