import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@garden/ui": "../../packages/ui/src",
			"@garden/theme": "../../packages/theme/src",
		},
	},
});
