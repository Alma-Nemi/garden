module.exports = {
	"*.{ts,tsx,js,jsx}": ["biome check --write", "biome format --write"],
	
	"*.{json,md}": (files) => {
		const filtered = files.filter(
			(f) =>
				!f.includes("/dist/") &&
				!f.includes("/build/") &&
				!f.includes("/storybook-static/"),
		);
		if (filtered.length === 0) return [];
		return [`biome format --write ${filtered.join(" ")}`];
	},
};