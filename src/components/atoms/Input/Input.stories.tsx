import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
    title: 'components/Input',
    tags: ["autodocs"],
    component: Input,
    argTypes: {
        variant: {
            control: "select",
            options: ['primary', 'secondary']
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
        disabled: {
            control: "boolean",
        }
    }
}

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        label: "enter ur Name",
        placeholder: "type here",
        variant: "primary",
        size: 'md',
    },
}

export const WithError: Story = {
    args: {
        label: "enter ur Name",
        placeholder: "type here",
        error: "oh no Error"
    }
}

export const Disabled: Story = {
    args: {
        label: "enter ur Name",
        placeholder: "type here",
        disabled: true,
    }
}

export const LargeSecondary: Story = {
    args: {
        label: "enter ur Name",
        placeholder: "type here",
        variant: "primary",
        size: 'lg',
    }
}