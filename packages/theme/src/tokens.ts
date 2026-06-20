export type Theme = {
	colors: {
		primary: string;
		text: string;
		background: string;
	};

	spacing: Record<"sm" | "md" | "lg", string>;
	radius: Record<"sm" | "md" | "lg", string>;
};

export const defaultTheme = {
	colors: {
		primary: "#6C5CE7",
		text: "#E6E6E6",
		background: "#0F0F12"
	},
	spacing: {
		sm: "4px",
		md: "8px",
		lg: "16px"
	},
	radius: {
		sm: "4px",
		md: "8px",
		lg: "12px"
	}
} as const;