import type { Meta, StoryObj } from "@storybook/react";
import { PasswordInput } from "./PasswordInput";

const meta: Meta<typeof PasswordInput> = {
    title: "Atoms/PasswordInput",
    component: PasswordInput,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PasswordInput>;

export const DefaultAndRequire: Story = {
    args: {
        label: "Password",
        name: "password",
        placeholder: "Enter your password",
        required: true,
    },
};

export const OptionalPassword: Story = {
    args: {
        label: "Password",
        name: "password",
        placeholder: "Optional password",
        required: false,
    },
};