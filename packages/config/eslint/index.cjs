module.exports = {
	rules: {
		"no-restricted-imports": [
			"error",
			{
				patterns: [
					"@garden/ui/src/*",
					"@garden/ui/internal/*",
					"@garden/theme/src/*",
					"@garden/core/src/*"
				]
			}
		]
	}
};