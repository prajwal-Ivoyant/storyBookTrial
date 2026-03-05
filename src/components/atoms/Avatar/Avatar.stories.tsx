import type { Meta, StoryObj } from "@storybook/react"
import { Avatar } from "./Avatar"

const meta: Meta<typeof Avatar> = {
    title: 'Atoms/Avatar',
    component: Avatar,
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
    }
};

export default meta;

type Story = StoryObj<typeof Avatar>

export const DefaultAvatar: Story = {
    args: {
        src: 'https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg',
        size: 'md',

    }
}

export const NamedAvatar: Story = {
    args: {
        src: 'https://i.pravatar.cc/100',
        size: 'md',
    }
}