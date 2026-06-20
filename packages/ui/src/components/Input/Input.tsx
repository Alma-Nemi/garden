import { useTheme } from "@garden/theme";

export function Input({ value, onChange, placeholder }: any) {
	const theme = useTheme();

	return (
		<input
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			style={{
				padding: theme.spacing.md,
				borderRadius: theme.radius.md,
				border: `1px solid ${theme.colors.primary}`,
				background: theme.colors.background,
				color: theme.colors.text
			}}
		/>
	);
}