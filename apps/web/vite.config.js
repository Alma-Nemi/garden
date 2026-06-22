import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
	plugins: [react()],

	resolve: {
		preserveSymlinks: false,
		dedupe: ["react", "react-dom", "scheduler"],
		alias: {
			"@garden/ui": path.resolve(__dirname, "../../packages/ui/src"),
			"@garden/theme": path.resolve(__dirname, "../../packages/theme/src"),
			"@garden/core": path.resolve(__dirname, "../../packages/core/src"),
		},
	},

	optimizeDeps: {
		include: ["react", "react-dom", "scheduler"],
	},

	server: {
		fs: {
			allow: [path.resolve(__dirname, "../..")],
		},
	},
});
