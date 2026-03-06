import type { Meta, StoryObj } from "@storybook/react";
import { CustomInput } from "./Input"

const meta: Meta<typeof CustomInput> = {
    title: "Atoms/Input",
    component: CustomInput,
    tags: ["autodocs"],

    argTypes: {
        InputType: {
            control: { type: "select" },
            options: ["text", "email", "number"],
        },


    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultAndRequire: Story = {
    args: {
        label: "Enter your Name",
        placeholder: "Type here",
        required: true,
        name: ""
    },
};

export const Email: Story = {
    args: {
        label: "Enter your Email",
        placeholder: "Type here",
        InputType: "email",
        name: ""
    },
};

export const Number: Story = {
    args: {
        label: "Enter your Phone Number",
        placeholder: "Type here",
        InputType: "number",
        name: ""
    },
};

export const Disabled: Story = {
    args: {
        label: "Enter your Name",
        placeholder: "Type here",
        disabled: true,
        name: ""
    },
};