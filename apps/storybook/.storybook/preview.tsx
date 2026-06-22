import { defaultTheme, ThemeProvider } from "@garden/theme";
import type { Decorator, Preview } from "@storybook/react";

const withTheme: Decorator = (Story) => (
	<ThemeProvider theme={defaultTheme}>
		<div style={{ padding: 24 }}>
			<Story />
		</div>
	</ThemeProvider>
);

const preview: Preview = {
	decorators: [withTheme],
	parameters: {
		layout: "centered",
	},
};

export default preview;
