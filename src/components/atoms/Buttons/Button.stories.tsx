import type { Meta, StoryObj } from "@storybook/react";

import type { ComponentProps } from "react";
import { Button } from "./Button";

type StoryProps = ComponentProps<typeof Button> & {
    buttonText: string;
};

const meta: Meta<StoryProps> = {
    title: "Atoms/Button",
    tags: ["autodocs"],
    component: Button,

    argTypes: {
        variant: {
            options: ["primary", "secondary"],
            control: { type: "select" },
        },
        size: {
            options: ["sm", "md", "lg"],
            control: { type: "select" },
        },
    },


};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
    args: {
        buttonText: "Click the button!",
        variant: "primary",
        size: "lg",
        onClick: () => console.log("Working1!")
    },
    render: ({ buttonText, ...args }) => (
        <Button {...args}>{buttonText}</Button>
    ),
};

export const Secondary: Story = {
    args: {
        buttonText: "Click the button 2!",
        variant: "secondary",
        size: "sm",
        onClick: () => console.log("Working2!")
    },
    render: ({ buttonText, ...args }) => (
        <Button {...args}>{buttonText}</Button>
    ),
};

export const TestClick: Story = {
    args: {
        children: "Test Button",
        variant: "primary",
        size: "md",
        onClick: () => alert("Working!"),
    },
};