module.exports = {
	"*.{ts,tsx,js,jsx}": () => ["biome check --write", "biome format --write"],

	"*.{json,md}": ["biome format --write"],
};
