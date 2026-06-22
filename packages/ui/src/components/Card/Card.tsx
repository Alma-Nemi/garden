import { useTheme } from "@garden/theme";

import type { PropsWithChildren } from "react";

export function Card({ children }: PropsWithChildren) {
	const theme = useTheme();

	return (
		<div
			style={{
				padding: theme.spacing.md,
				borderRadius: theme.radius.lg,
				background: theme.colors.background,
				border: `1px solid ${theme.colors.primary}`,
			}}
		>
			{children}
		</div>
	);
}
