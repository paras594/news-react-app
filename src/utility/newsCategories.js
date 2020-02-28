const newsCategories = [
	{
		category: "General",
		categoryUrl: `https://newsapi.org/v2/everything?sources=newsweek&apiKey=${
			process.env.API_KEY
		}`,
	},
	{
		category: "Political",
		categoryUrl: `https://newsapi.org/v2/everything?domains=politico.com&apiKey=${
			process.env.API_KEY
		}`,
	},
	{
		category: "Business",
		categoryUrl: `https://newsapi.org/v2/everything?sources=cnbc&apiKey=${
			process.env.API_KEY
		}`,
	},
	{
		category: "Sports",
		categoryUrl: `https://newsapi.org/v2/everything?sources=bbc-sport&apiKey=${
			process.env.API_KEY
		}`,
	},
	{
		category: "Hollywood",
		categoryUrl: `https://newsapi.org/v2/everything?domains=perezhilton.com&apiKey=${
			process.env.API_KEY
		}`,
	},
	{
		category: "Bollywood",
		categoryUrl: `https://newsapi.org/v2/everything?domains=pinkvilla.com&apiKey=${
			process.env.API_KEY
		}`,
	},
	{
		category: "Entertainment",
		categoryUrl: `https://newsapi.org/v2/everything?sources=buzzfeed&apiKey=${
			process.env.API_KEY
		}`,
	},

	{
		category: "Health",
		categoryUrl: `https://newsapi.org/v2/everything?sources=medical-news-today&apiKey=${
			process.env.API_KEY
		}`,
	},
	{
		category: "Science",
		categoryUrl: `https://newsapi.org/v2/everything?sources=national-geographic&apiKey=${
			process.env.API_KEY
		}`,
	},
	{
		category: "Technology",
		categoryUrl: `https://newsapi.org/v2/everything?sources=techradar&apiKey=${
			process.env.API_KEY
		}`,
	},
];

export default newsCategories;
