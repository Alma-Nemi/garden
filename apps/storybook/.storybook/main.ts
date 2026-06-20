import path from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	stories: ["../../packages/ui/src/**/*.stories.tsx"],

	framework: {
		name: "@storybook/react-vite",
		options: {},
	},

	viteFinal: async (config) => {
		config.resolve = {
			...config.resolve,
			alias: {
				"@garden/ui": path.resolve(__dirname, "../../packages/ui/src"),
				"@garden/theme": path.resolve(__dirname, "../../packages/theme/src"),
				"@garden/core": path.resolve(__dirname, "../../packages/core/src"),
			},
		};

		return config;
	},
};

export default config;