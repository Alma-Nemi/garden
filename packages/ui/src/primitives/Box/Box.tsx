import type { CSSProperties, PropsWithChildren } from "react";

type BoxProps = PropsWithChildren<{
	style?: CSSProperties;
}>;

export function Box({ children, style }: BoxProps) {
	return <div style={{ ...style }}>{children}</div>;
}
