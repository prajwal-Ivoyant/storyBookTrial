import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";
import Stack from "./Stack";

type StoryProps = ComponentProps<typeof Stack> & {
    numberOfChildren: number;
};

const meta: Meta<StoryProps> = {
    title: "Atoms/Stack",
    tags: ["autodocs"],
    component: Stack,
    argTypes: {
        numberOfChildren: {
            control: { type: "select" },
            options: [1, 5, 10]
        },
        orientation: {
            control: { type: "radio" },
            options: ["horizontal", "vertical"],
        },
    },
    args: {
        numberOfChildren: 5,
    }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Horizontal: Story = {
    args: {
        orientation: 'horizontal',

    },
    render: ({ numberOfChildren, ...args }) => {
        return <Stack {...args}>{createChildren(numberOfChildren)}</Stack>
    }
};

export const vertical: Story = {
    args: {
        orientation: 'vertical',

    },
    render: ({ numberOfChildren, ...args }) => {
        return <Stack {...args}>{createChildren(numberOfChildren)}</Stack>
    }
};

function createChildren(numberOfChildren: number) {
    return Array(numberOfChildren)
        .fill(null)
        .map((_, index) => {
            return (
                <div
                    key={index}
                    style={{ width: 100, height: 100, backgroundColor: "red" }}
                />
            );
        });
}

