import type React from "react";
import { createContext, useContext } from "react";
import type { Theme } from "./tokens";
import { defaultTheme } from "./tokens";

const ThemeContext = createContext<Theme>(defaultTheme);

export function ThemeProvider({
																theme = defaultTheme,
																children,
															}: {
	theme?: Theme;
	children: React.ReactNode;
}) {
	return (
		<ThemeContext.Provider value={theme}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme(): Theme {
	return useContext(ThemeContext);
}
