import type { Preview, Decorator } from "@storybook/react";
import React from "react";

import { ThemeProvider, defaultTheme } from "@garden/theme";

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