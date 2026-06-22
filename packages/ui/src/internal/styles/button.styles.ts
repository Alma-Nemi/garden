import type { Theme } from "@garden/theme";
export function createButtonStyles(theme: Theme) {
	return {
		base: {
			padding: `${theme.spacing.sm} ${theme.spacing.md}`,
			borderRadius: theme.radius.md,
			border: "none",
			cursor: "pointer",
			fontWeight: 500,
			transition: "all 0.2s ease",
		},

		variants: {
			variant: {
				primary: {
					background: theme.colors.primary,
					color: "#fff",
				},

				secondary: {
					background: "transparent",
					color: theme.colors.primary,
					border: `1px solid ${theme.colors.primary}`,
				},

				ghost: {
					background: "transparent",
					color: theme.colors.text,
				},
			},

			size: {
				sm: {
					fontSize: "12px",
					padding: "6px 10px",
				},
				md: {
					fontSize: "14px",
					padding: "8px 16px",
				},
				lg: {
					fontSize: "16px",
					padding: "12px 20px",
				},
			},

			disabled: {
				true: {
					opacity: 0.5,
					cursor: "not-allowed",
				},
			},
		},
	};
}
