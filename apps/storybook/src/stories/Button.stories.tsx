import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
	title: "Button",
};

export default meta;

export const Primary: StoryObj = {
	render: () => <button>Click</button>,
};