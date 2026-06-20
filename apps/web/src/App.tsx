import { config } from "@garden/core";
import { Button } from "@garden/ui";

export default function App() {
	return (
		<div>
			<h1>{config.appName}</h1>
			<p>Semantic Garden is alive 🌱</p>
			<Button
				label="Click me"
				onClick={() => console.log("hello garden")}
			/>
		</div>
	);
}