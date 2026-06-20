export function Text({ children, variant = "body" }: any) {
	return (
		<span style={{
			fontSize: variant === "body" ? 14 : 18
		}}>
			{children}
		</span>
	);
}