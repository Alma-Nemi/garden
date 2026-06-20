import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@garden/ui": "../../packages/ui/src",
			"@garden/theme": "../../packages/theme/src"
		}
	}
});