import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toast } from "./Toast";
import { useState } from "react";

const meta: Meta<typeof Toast> = {
  title: "Feedback/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
};

type Story = StoryObj<typeof Toast>;

export const Interactive: Story = {
  render: (args) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
      <div>
        <button
          onClick={() => setIsVisible(true)}
          style={{ padding: "10px 20px", cursor: "pointer" }}
        >
          Натисни, щоб з'явився Toast
        </button>
        {isVisible && (
          <Toast
            {...args}
            message="Вітаю! Все працює!"
            onClose={() => setIsVisible(false)}
          />
        )}
      </div>
    );
  },
};

export default meta;
