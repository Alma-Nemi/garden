import { useTheme } from "@garden/theme";

export function Card({ children }: any) {
	const theme = useTheme();

	return (
		<div style={{
			padding: theme.spacing.md,
			borderRadius: theme.radius.lg,
			background: theme.colors.background,
			border: `1px solid ${theme.colors.primary}`
		}}>
			{children}
		</div>
	);
}