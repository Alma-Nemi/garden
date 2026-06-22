import type { PropsWithChildren } from "react";

type StackProps = PropsWithChildren<{
	direction?: "row" | "column";
	gap?: number;
}>;
export function Stack({ direction = "column", gap = 8, children }: StackProps) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: direction,
				gap,
			}}
		>
			{children}
		</div>
	);
}
