import { useTheme } from "@garden/theme";
import type { ButtonProps } from "./Button.types";
import { buttonStyles } from "./button.cva";

export function Button({
												 label,
												 variant = "primary",
												 size = "md",
												 disabled,
												 onClick,
											 }: ButtonProps) {
	const theme = useTheme();

	const styles = buttonStyles(theme);

	return (
		<button
			onClick={onClick}
			disabled={disabled}
			style={{
				...styles.base,
				...styles.sizes[size],
				...styles.variants[variant],
				opacity: disabled ? 0.5 : 1,
			}}
		>
			{label}
		</button>
	);
}