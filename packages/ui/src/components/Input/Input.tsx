import { useTheme } from "@garden/theme";
import type { ChangeEvent } from "react";

type InputProps = {
	value: string;
	placeholder?: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function Input({ value, onChange, placeholder }: InputProps) {
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
				color: theme.colors.text,
			}}
		/>
	);
}
