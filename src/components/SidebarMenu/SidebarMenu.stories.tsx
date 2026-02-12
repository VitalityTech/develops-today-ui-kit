import type { Meta, StoryObj } from "@storybook/react-vite";
import { SidebarMenu } from "./SidebarMenu";
import { useState } from "react";

const meta: Meta<typeof SidebarMenu> = {
  title: "Navigation/SidebarMenu",
  component: SidebarMenu,
};

type Story = StoryObj<typeof SidebarMenu>;

const mockItems = [
  { id: "1", label: "Dashboard" },
  {
    id: "2",
    label: "Settings",
    children: [
      { id: "2-1", label: "Profile" },
      { id: "2-2", label: "Security" },
    ],
  },
  {
    id: "3",
    label: "Projects",
    children: [
      {
        id: "3-1",
        label: "Web Apps",
        children: [{ id: "3-1-1", label: "React Project" }],
      },
    ],
  },
];

export const NestedMenu: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Sidebar</button>
        <SidebarMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          items={mockItems}
          title="My App"
        />
      </div>
    );
  },
};

export default meta;
