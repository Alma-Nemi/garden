module.exports = {
	"*.{ts,tsx,js,jsx}": (files) => [
		"biome check --write",
		"biome format --write"
	],
	
	"*.{json,md}": ["biome format --write"]
};