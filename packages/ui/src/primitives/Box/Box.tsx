export function Box({ children, style }: any) {
	return (
		<div style={{ ...style }}>
			{children}
		</div>
	);
}