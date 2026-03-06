import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { Button } from "./Button";
import { GoogleOutlined } from '@ant-design/icons';

const meta: Meta<typeof Button> = {
    title: "Atoms/Button",
    component: Button,
    tags: ["autodocs"],

    argTypes: {
        category: {
            options: ["primary", "default", "dashed"],
            control: { type: "select" },
        },

        size: {
            options: ["sm", "md", "lg"],
            control: { type: "select" },
        },
    },

    args: {
        onClick: fn(),
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        label: "Primary Button",
        category: "primary",
        size: "lg",
    },
};

export const Default: Story = {
    args: {
        label: "Default Button",
        category: "default",
        size: "sm",
    },
};

export const Dashed: Story = {
    args: {
        label: "Dashed Button",
        category: "dashed",
        size: "md",
    },
};

export const TestClick: Story = {
    args: {
        label: "Click Me",
        category: "primary",
        size: "md",
        onClick: () => alert("Working!"),
    },
};

export const IconButton: Story = {
    args: {
        icon: <GoogleOutlined />,
    },
};