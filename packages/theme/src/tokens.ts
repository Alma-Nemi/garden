export type Theme = {
	colors: Record<"primary" | "text" | "background", string>;
	spacing: Record<"sm" | "md" | "lg", string>;
	radius: Record<"sm" | "md" | "lg", string>;
};

export const defaultTheme = {
	colors: {
		primary: "#4f46e5",
		text: "#111827",
		background: "#ffffff",
	},

	spacing: {
		sm: "8px",
		md: "16px",
		lg: "24px",
	},

	radius: {
		sm: "4px",
		md: "8px",
		lg: "12px",
	},
} as const satisfies Theme;
