import type { Meta, StoryObj } from "@storybook/react";
import { ProfileCard } from "./ProfileCard";

const meta: Meta<typeof ProfileCard> = {
    title: 'molecule/profileCard',
    tags: ["autodocs"],
    component: ProfileCard,

}

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
    args: {
        name: 'Ramanuja',
        avatar: 'https://i.pravatar.cc/100',
        role: 'Software Intern'

    }
}