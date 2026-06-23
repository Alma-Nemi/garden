import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@garden/theme": path.resolve(__dirname, "../../packages/theme/src"),
			"@garden/ui": path.resolve(__dirname, "../../packages/ui/src"),
		},
		dedupe: ["react", "react-dom"],
	},
	server: {
		fs: {
			allow: [".."],
		},
	},
	optimizeDeps: {
		include: ["react", "react-dom", "react/jsx-runtime"],
	},
});
