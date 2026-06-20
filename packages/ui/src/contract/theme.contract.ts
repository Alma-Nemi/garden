export type UIThemeContract = {
	colors: {
		primary: string;
		text: string;
		background: string;
	};
	spacing: Record<"sm" | "md" | "lg", string>;
	radius: Record<"sm" | "md" | "lg", string>;
};