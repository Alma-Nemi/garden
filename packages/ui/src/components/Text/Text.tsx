import type { PropsWithChildren } from "react";

type TextProps = PropsWithChildren<{
	variant?: "body" | "caption" | "title";
}>;

export function Text({ children, variant = "body" }: TextProps) {
	return (
		<span
			style={{
				fontSize: variant === "body" ? 14 : 18,
			}}
		>
			{children}
		</span>
	);
}
