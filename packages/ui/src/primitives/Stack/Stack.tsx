export function Stack({ direction = "column", gap = 8, children }: any) {
	return (
		<div style={{
			display: "flex",
			flexDirection: direction,
			gap
		}}>
			{children}
		</div>
	);
}