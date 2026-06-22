export function createStyleEngine() {
	return function resolve(styles: Record<string, unknown>) {
		return styles;
	};
}
