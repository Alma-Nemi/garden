import type { Theme } from "@garden/theme";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

export function buttonStyles(theme: Theme) {
	return {
		base: {
			border: "none",
			borderRadius: theme.radius.md,
			fontWeight: 500,
			transition: "0.2s",
			cursor: "pointer"
		},

		sizes: {
			sm: { padding: "6px 10px", fontSize: "12px" },
			md: { padding: "8px 16px", fontSize: "14px" },
			lg: { padding: "12px 20px", fontSize: "16px" }
		},

		variants: {
			primary: {
				background: theme.colors.primary,
				color: "#fff"
			},

			secondary: {
				background: "transparent",
				border: `1px solid ${theme.colors.primary}`,
				color: theme.colors.primary
			},

			ghost: {
				background: "transparent",
				color: theme.colors.text
			}
		} satisfies Record<Variant, any>
	};
}